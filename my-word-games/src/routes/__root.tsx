import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const Route = createRootRoute({
	component: () => (
		<>
			<Theme accentColor="gray" appearance="dark">
				<Outlet />
			</Theme>
			<TanStackRouterDevtools />
		</>
	),
});
