import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBadWord } from "../../redux/actions/badMessage";

const ModalAdd = (props) => {
	const { setModalIsOpen } = props;
	const [badWord, setBadWord] = useState("");
	const dispatch = useDispatch();
	const handleAdd = () => {
		dispatch(createBadWord(badWord));
		setBadWord("");
		setModalIsOpen(false);
	};
	return (
		<div>
			<div className="from-update">
				<h1>Create Bad Word</h1>
				<input
					onChange={(e) => setBadWord(e.target.value)}
					type="text"
					placeholder="Nhập ..."
				/>

				<div className="handel-badWord">
					<button
						onClick={() => {
							setModalIsOpen(false);
						}}
					>
						Cancel
					</button>
					<button onClick={handleAdd}>Add</button>
				</div>
			</div>
		</div>
	);
};

export default ModalAdd;
