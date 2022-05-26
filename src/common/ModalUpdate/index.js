import React, { useState } from "react";
import Exit from "../../assets/images/exit.png";
import { useDispatch, useSelector } from "react-redux";
import { updateBadWord } from "../../redux/actions/badMessage";
import "./style.scss";

const ModalUpdate = (prop) => {
	const { id, wordBad, setModalIsOpen } = prop;
	console.log(id);
	console.log("show word: ", wordBad);
	const [word, setWord] = useState(wordBad);
	const dispatch = useDispatch();

	const handelUpdate = () => {
		dispatch(updateBadWord(id, word));

		setModalIsOpen(false);
	};

	return (
		<>
			<div className="from-update">
				<h1>Change bad Word</h1>
				<input
					onChange={(e) => setWord(e.target.value)}
					type="text"
					value={word}
				/>
				<div className="handel-badWord">
					<button onClick={() => setModalIsOpen(false)}>Cancel</button>
					<button onClick={handelUpdate}>Update</button>
				</div>
			</div>
		</>
	);
};

export default ModalUpdate;
