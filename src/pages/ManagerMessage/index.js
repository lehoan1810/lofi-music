import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { badMessage } from "../../redux/actions/badMessage";
import Bad from "../../assets/images/bad.png";

import ModalUpdate from "../../common/ModalUpdate";
import Modal from "react-modal/lib/components/Modal";
import Dog from "../../assets/images/Dog.png";
import Card2 from "../../assets/images/card2.png";
import Ban from "../../assets/images/ban.png";
import Plus from "../../assets/images/Plus.png";
import Delete from "../../assets/images/delete.png";
import Update from "../../assets/images/update.png";
import LoadingTable from "../../common/LoadingTable";
import ModalDelete from "../../common/ModalDelete";
import { getListStatistic } from "../../redux/actions/statistic";
import ModalAdd from "../../common/ModalAdd";
import "./style.scss";

const ManagerMessage = () => {
	const dispatch = useDispatch();
	const [openModal, setOpenModal] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [openModalAdd, setOpenModalAdd] = useState(false);

	const [getId, setGetId] = useState("");
	const [getWord, setGetWord] = useState("");

	const listDataBadWord = useSelector((state) => state.badMessageState);
	const listMessage = useSelector((state) => state.statisticReducer);

	useEffect(() => {
		dispatch(badMessage());
		dispatch(getListStatistic());
	}, []);

	const createBadMessage = () => {
		setOpenModalAdd(true);
	};

	return (
		<>
			<div className="right-badword">
				<div className="menu-card bottom">
					<div className="card-items">
						<span className="card-items-title">Total Bad Word</span>
						<div className="card-item">
							<img src={Ban} alt="" />
							<div className="card-data">
								<span>+{listDataBadWord.list.length}</span>
							</div>
						</div>
					</div>
					<div className="card-items">
						<span className="card-items-title">Total Message Today</span>
						<div className="card-item">
							<img src={Card2} alt="" />
							<div className="card-data">
								<span>+{listMessage.listStatistic.totalMessagesToday}</span>
							</div>
						</div>
					</div>
					<div className="card-items">
						<span className="card-items-title">Total Message Month</span>
						<div className="card-item">
							<img src={Card2} alt="" />
							<div className="card-data">
								<span>+{listMessage.listStatistic.totalMessageThisMonth}</span>
							</div>
						</div>
					</div>
				</div>

				<div className="add-badword">
					<div className="btn-badword" type="button" onClick={createBadMessage}>
						<img src={Plus} alt="" srcset="" />
						<span>Add</span>
					</div>
				</div>

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
								{listDataBadWord.list.length === 0 && (
									<tr>
										<td colSpan="4">
											<LoadingTable />
										</td>
									</tr>
								)}
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
												<div className="action-img-handel">
													<img
														onClick={() => {
															setOpenModal(true);
															setGetId(item.id);
															setGetWord(item.badWord);
														}}
														src={Update}
														alt=""
													/>
													<img
														onClick={() => {
															setOpenModalDelete(true);
															setGetId(item.id);
														}}
														src={Delete}
														alt=""
													/>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
					<div className="img-3d-message">
						<img src={Dog} alt="" />
					</div>
				</div>

				<Modal
					isOpen={openModal}
					ariaHideApp={false}
					onRequestClose={() => setOpenModal(false)}
					style={{
						overlay: {
							backgroundColor: "rgba(0,0,0,0.4)",
						},
						content: {
							width: "30rem",
							margin: "auto",
							height: "15rem",
							borderRadius: "10px",
						},
					}}
				>
					<ModalUpdate
						wordBad={getWord}
						id={getId}
						setModalIsOpen={setOpenModal}
					/>
				</Modal>
				<Modal
					isOpen={openModalDelete}
					ariaHideApp={false}
					onRequestClose={() => setOpenModalDelete(false)}
					style={{
						overlay: {
							backgroundColor: "rgba(0,0,0,0.4)",
						},
						content: {
							width: "25rem",
							margin: "auto",
							height: "12rem",
							borderRadius: "10px",
						},
					}}
				>
					<ModalDelete id={getId} setModalIsOpen={setOpenModalDelete} />
				</Modal>
				<Modal
					isOpen={openModalAdd}
					ariaHideApp={false}
					onRequestClose={() => setOpenModalAdd(false)}
					style={{
						overlay: {
							backgroundColor: "rgba(0,0,0,0.4)",
						},
						content: {
							width: "25rem",
							margin: "auto",
							height: "15rem",
							borderRadius: "10px",
						},
					}}
				>
					<ModalAdd setModalIsOpen={setOpenModalAdd} />
				</Modal>
			</div>
		</>
	);
};

export default ManagerMessage;
