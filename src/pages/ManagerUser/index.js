import axios from "axios";
import React, { useState, useEffect } from "react";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";
import Panda from "../../assets/images/Panda.png";
import authHeader from "../../sevices";
import "./style.scss";

const ManagerUser = () => {
	const [listAdmin, setListAdmin] = useState([]);
	const urls =
		"https://lofi-chill-chatting.herokuapp.com/rest/admin/list-admin";

	useEffect(() => {
		const showData = async () => {
			await axios
				.get(urls, { headers: authHeader() })
				.then((res) => {
					setListAdmin(res.data);
					console.log(res.data);
				})
				.catch((err) => console.log(err));
		};
		showData();
	}, []);

	return (
		<div className="right-content">
			<div className="menu-card">
				<div className="card-items">
					<span className="card-items-title">Total Admin</span>
					<div className="card-item">
						<img src={Card1} alt="" />
						<div className="card-data">
							<span>+10</span>
						</div>
					</div>
				</div>
				<div className="card-items">
					<span className="card-items-title">Total Message</span>
					<div className="card-item">
						<img src={Card2} alt="" />
						<div className="card-data">
							<span>+100</span>
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
							{listAdmin.map((item, id) => (
								<tr>
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
											<button>Delete</button>
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
		</div>
	);
};

export default ManagerUser;
