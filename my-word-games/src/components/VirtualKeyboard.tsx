import React from "react";
import { Flex, Button } from "@radix-ui/themes";

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
		<Flex direction={"column"}>
			{Object.values(keyboardRows).map((entry) => {
				return (
					<Flex key={`${entry[0]}1`}>
						{entry.map((letter) => (
							<Button
								key={`${letter}0`}
								id={letter}
								onClick={handleClick}
							>
								{letter}
							</Button>
						))}
					</Flex>
				);
			})}
			<Flex direction="row">Rows go here</Flex>
		</Flex>
	);
};

export default VirtualKeyboard;
