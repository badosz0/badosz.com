import { AppProps } from "next/app";
import "~/globals.css";
import { ThemeProvider } from "next-themes";
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
