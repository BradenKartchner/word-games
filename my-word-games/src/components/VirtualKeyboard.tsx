import React from "react";
import { Flex, Button } from "@radix-ui/themes";
import VirtualKeyboardButton from "./VirtualKeyboardButton";

const keyboardRows = {
	rowOne: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	rowTwo: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	rowThree: ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "del"],
};

const VirtualKeyboard = () => {
	const handleClick = (eve: React.MouseEvent<HTMLButtonElement>) => {
		const target = eve.target as HTMLButtonElement;
		console.log(target.id);
	};
	return (
		<Flex direction={"column"} gapY="1">
			{Object.values(keyboardRows).map((entry, index) => {
				return (
					<Flex
						key={`${entry[0]}1`}
						gapX="1"
						className={index === 1 ? "ml-6" : "mx-2"}
					>
						{entry.map((letter) => (
							<VirtualKeyboardButton
								letter={letter}
								background={"bg-neutral-500"}
								key={`${letter}0`}
							/>
						))}
					</Flex>
				);
			})}
			<Flex direction="row">Rows go here</Flex>
		</Flex>
	);
};

export default VirtualKeyboard;
