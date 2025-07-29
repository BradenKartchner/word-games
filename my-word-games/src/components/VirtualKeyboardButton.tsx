import React from "react";

interface VirtualKeyboardButtonProps {
	letter: string;
	background: string;
}

const VirtualKeyboardButton = ({ letter }: VirtualKeyboardButtonProps) => {
	const handleClick = (eve: React.MouseEvent<HTMLButtonElement>) => {
		const target = eve.target as HTMLButtonElement;
		console.log(target.id);
	};
	return (
		<button
			id={letter}
			onClick={handleClick}
			className="bg-neutral-500 rounded-lg px-2 py-1"
		>
			{letter}
		</button>
	);
};

export default VirtualKeyboardButton;
