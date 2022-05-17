import React from "react";
import Card1 from "../../assets/images/card1.png";
import "./style.scss";

const ManagerUser = () => {
	return (
		<div className="right-content">
			<div className="menu-card">
				<div className="card-item">
					<img src={Card1} alt="" />
					<div className="card-data">
						<span>Số Admin</span>
						<span>10</span>
					</div>
				</div>
				<div className="card-item">
					<img src={Card1} alt="" />
					<div className="card-data">
						<span>Số Admin</span>
						<span>10</span>
					</div>
				</div>
				<div className="card-item">
					<img src={Card1} alt="" />
					<div className="card-data">
						<span>Số Admin</span>
						<span>10</span>
					</div>
				</div>
			</div>
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
							<td className="item-name-table">Vũ Nguyễn Hồng Ân</td>

							<td>
								<div className="action-handel">Đang Hoạt Động</div>
							</td>

							<td>
								<div className="action-seen">
									<button>Delete</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManagerUser;
