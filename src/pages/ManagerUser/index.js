import axios from "axios";
import React, { useState, useEffect } from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";
import Panda from "../../assets/images/Panda.png";
import AddAdmin from "../../assets/images/AddAdmin.png";
import LoadingTable from "../../common/LoadingTable";
import "./style.scss";
import Modal from "react-modal/lib/components/Modal";
import ModalCreateAdmin from "../../common/ModalCreateAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getListAdmin } from "../../redux/actions/admin";
import { getListStatistic } from "../../redux/actions/statistic";

const ManagerUser = () => {
	const dispatch = useDispatch();
	const [openModal, setOpenModal] = useState(false);
	const listDataAdmin = useSelector((state) => state.AddAdmin);
	const listMessage = useSelector((state) => state.statisticReducer);
	console.log("show listMessage: ", listMessage);

	useEffect(() => {
		dispatch(getListAdmin());
		dispatch(getListStatistic());
	}, []);
	return (
		<div className="right-content">
			<div className="menu-card">
				<div className="card-items">
					<div className="admin-flex">
						<span className="card-items-title">Total Admin</span>
						<img
							onClick={() => setOpenModal(true)}
							className="create-admin"
							src={AddAdmin}
							alt=""
						/>
					</div>
					<div className="card-item">
						<img src={Card1} alt="" />
						<div className="card-data">
							<span>+{listDataAdmin.list.length}</span>
						</div>
					</div>
				</div>
				<div className="card-items">
					<span className="card-items-title">Total Message today</span>
					<div className="card-item">
						<img src={Card2} alt="" />
						<div className="card-data">
							<span>+{listMessage.listStatistic.totalMessagesToday}</span>
						</div>
					</div>
				</div>
				<div className="card-items">
					<span className="card-items-title">Total Invoice</span>
					<div className="card-item">
						<img src={Card3} alt="" />
						<div className="card-data">
							<span>+20</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-3d">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Avatar</th>
								<th className="custom-title">Họ và Tên</th>
								<th>Trạng Thái</th>
								<th>Xem</th>
							</tr>
						</thead>
						<tbody>
							{listDataAdmin.list.length === 0 && (
								<tr>
									<td colSpan="4">
										<LoadingTable />
									</td>
								</tr>
							)}

							{listDataAdmin.list.map((item, id) => (
								<tr key={id}>
									<td>
										<div className="avatar-center avatar-status">
											<span className="_status"></span>
											<img
												className="image-cover avatar-image"
												src="https://i.pinimg.com/736x/8e/57/ec/8e57ec1bbfed10c8e66f34f129a34638.jpg"
												alt=""
											/>
										</div>
									</td>
									<td className="item-name-table">{item.name}</td>

									<td>
										<div className="action-handel">Đang Hoạt Động</div>
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
				<div className="img-3d">
					<img src={Panda} alt="" />
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
						height: "27rem",
						borderRadius: "10px",
					},
				}}
			>
				<ModalCreateAdmin setModalIsOpen={setOpenModal} />
			</Modal>
		</div>
	);
};

export default ManagerUser;
