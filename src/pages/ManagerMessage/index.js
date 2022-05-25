import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { badMessage, createBadWord } from "../../redux/actions/badMessage";
import Bad from "../../assets/images/bad.png";
import "./style.scss";

const ManagerMessage = () => {
	const dispatch = useDispatch();
	const [badWord, setBadWord] = useState("");
	const listDataBadWord = useSelector((state) => state.badMessageState);
	console.log("show: ", listDataBadWord.list);

	useEffect(() => {
		dispatch(badMessage());
	}, []);

	const createBadMessage = () => {
		dispatch(createBadWord(badWord));
	};

	return (
		<div className="right-content">
			<input type="text" onChange={(e) => setBadWord(e.target.value)} />
			<button type="button" onClick={createBadMessage}>
				Add
			</button>
			<div className="flex-3d table-bad">
				<div className="table ">
					<table>
						<thead>
							<tr>
								<th>Thông tin</th>
								<th>Từ bị chặn</th>
								<th>Hình thức</th>
								<th>Xử lý</th>
							</tr>
						</thead>
						<tbody>
							{listDataBadWord.list &&
								listDataBadWord.list.map((item, id) => (
									<tr key={id}>
										<td>
											<div className="avatar-center avatar-status">
												<img className="image-bad " src={Bad} alt="" />
											</div>
										</td>
										<td className="item-name-table">{item.badWord}</td>

										<td>
											<div>*****</div>
										</td>

										<td>
											<div className="action-seen">
												<button>Update</button>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				{/* <div className="img-3d">
					<img src={Panda} alt="" />
				</div> */}
			</div>
		</div>
	);
};

export default ManagerMessage;
