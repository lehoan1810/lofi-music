import React from "react";
import { useDispatch } from "react-redux";
import { deleteBadWord } from "../../redux/actions/badMessage";
import "./style.scss";

const ModalDelete = (prop) => {
	const { setModalIsOpen, id } = prop;
	const dispatch = useDispatch();
	const handelDelete = () => {
		dispatch(deleteBadWord(id));
		setModalIsOpen(false);
	};
	return (
		<div className="modal-center">
			<div className="from-update">
				<span>Bạn có muốn xóa từ này không ?</span>

				<div className="handel-delete">
					<button
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						Cancel
					</button>
					<button onClick={handelDelete}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDelete;
