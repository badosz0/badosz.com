import { AppProps } from "next/app";
import "~/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
