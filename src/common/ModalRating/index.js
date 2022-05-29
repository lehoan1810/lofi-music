import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";

const ModalRating = (props) => {
	const { setOpenModal } = props;
	const dispatch = useDispatch();
	return <div className="from-update">ModalRating</div>;
};

export default ModalRating;
