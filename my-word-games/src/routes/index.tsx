import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import "../App.css";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const navigate = useNavigate();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/routes/index.tsx</code> and save to reload.
				</p>
				<div>
					<button
						onClick={() => {
							navigate({ to: "/wordle" });
						}}
					>
						Wordle
					</button>
				</div>
			</header>
		</div>
	);
}
