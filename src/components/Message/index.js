import React, { useEffect, useState, useRef } from "react";
import Exit from "../../assets/images/exit.png";
import axios from "axios";
import { setLocal } from "../../LocalStorage/getLocal";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import InputEmoji from "react-input-emoji";
import "./style.scss";
import SkeletonChat from "../../common/SkeletonChat";

const Message = (prop) => {
	const { openChatHandler } = prop;
	const [message, setMessage] = useState("");
	const [listMessage, setListMessage] = useState([]);
	const [chanel, setChanel] = useState("CHANNEL_1");
	const [loading, setLoading] = useState(true);

	const nameStorage = setLocal("name");
	const tokenStorage = setLocal("token");

	const urls = `${process.env.REACT_APP_LOFI_URL}/rest/message/${chanel}`;
	const SOCKET_URL = `${process.env.REACT_APP_LOFI_URL}/ws`;
	console.log("show .env: ", urls);

	var sock = new SockJS(SOCKET_URL);
	let stompClient = Stomp.over(sock);
	var sub = useRef();

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		axios
			.get(urls, { signal: signal })
			.then((res) => {
				setListMessage(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));

		stompClient.debug = null;
		stompClient.connect(
			{},
			function (frame) {
				sub.current = stompClient.subscribe(`/message/${chanel}`, function (m) {
					const m2 = JSON.parse(m.body);
					setListMessage(m2);
					console.log("show m2: ", m2);
				});
			},
			function (error) {
				console.log("connect error", error);
			}
		);
		return () => {
			controller.abort();
		};
	}, [chanel]);

	const url = `${process.env.REACT_APP_LOFI_URL}/rest/message`;

	const changeChanel = (e) => {
		sub.current.unsubscribe();
		setChanel(e.target.value);
		console.log(e.target.value);
	};

	const sendMessage = async () => {
		setMessage("");
		try {
			axios
				.post(url, {
					message: message,
					token: tokenStorage,
					guestName: nameStorage,
					channel: chanel,
				})
				.then((res) => {
					console.log(message);
					console.log("data", res.data);
				})
				.catch((err) => console.log("error", err));
		} catch (error) {
			console.error(error);
		}
	};

	const handleKeyUp = (e) => {
		if (e.keyCode === 13) sendMessage();
	};

	// scroll message back to bottom
	const messageRef = useRef();
	useEffect(() => {
		if (messageRef.current) {
			messageRef.current.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "nearest",
			});
		}
	}, [listMessage]);

	return (
		<div className="form-message">
			<div className="message-header">
				<div className="form-group">
					<label className="label-chanel" htmlFor="select1">
						{chanel}
					</label>
					<select
						value={chanel}
						onChange={(e) => changeChanel(e)}
						className="form-control"
					>
						<option value="select">Select an chanel</option>
						<option value="CHANNEL_1">CHANNEL_1</option>
						<option value="CHANNEL_2">CHANNEL_2</option>
						<option value="CHANNEL_3">CHANNEL_3</option>
					</select>
				</div>

				<div className="message-menu">
					<div onClick={openChatHandler} className="menu-item">
						<img src={Exit} alt="" />
					</div>
				</div>
			</div>
			<div className="message-content">
				{loading && <SkeletonChat />}
				{/* {loading ? (
					<div ref={messageRef} className="guest">
						<SkeletonChat />
					</div>
				) : ( */}
				<div ref={messageRef} className="guest">
					{listMessage &&
						listMessage.map((item, id) => (
							<div key={id} className="message-guest">
								<span className="guest-name">{item.guestName}</span>
								<span className="guest-content">{item.message}</span>
							</div>
						))}
				</div>
				{/* )} */}
			</div>
			<div className="message-send">
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					type="text"
					placeholder="Write a message..."
					onKeyUp={handleKeyUp}
				/>
				<i className="bx bx-wink-smile"></i>
				<i onClick={sendMessage} className="bx bx-send"></i>
			</div>
		</div>
	);
};

export default Message;
