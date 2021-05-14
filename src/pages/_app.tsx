import { AppProps } from "next/app";
import "~/globals.css";
import { ThemeProvider } from "next-themes";
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<GlobalStyles />
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900"
					rel="stylesheet"
					media="print"
				/>
				<meta name="theme-color" content="#fde68a" />
				<meta
					property="og:image"
					content="/images/avatar/badosz.png"
					key="og-image"
				/>
				<link
					rel="shortcut icon"
					href="/images/avatar/badosz.png"
				></link>
				<link rel="icon" href="/images/avatar/badosz.png"></link>
			</Head>
			<DefaultSeo
				defaultTitle="Bartosz Król"
				description="I code, most of the time."
				canonical="https://www.badosz.com/"
				additionalMetaTags={[
					{
						name: "keywords",
						content:
							"Image Api Obrazium Badosz Salio Programmer Curfe Dear President",
					},
				]}
				openGraph={{
					url: "https://www.badosz.com",
					title: "Bartosz Król",
					description: "I code, most of the time.",
				}}
			/>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
