import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@radix-ui/themes";
import VirtualKeyboard from "../components/VirtualKeyboard";

export const Route = createFileRoute("/wordle")({
	component: Wordle,
});

function Wordle() {
	return (
		<div className="w-full h-full min-h-screen flex items-center mx-1">
			<div className="flex flex-col items-center w-full">
				<div>Hello</div>
				<VirtualKeyboard />
			</div>
		</div>
	);
}
