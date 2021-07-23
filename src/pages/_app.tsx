import { config } from "@fortawesome/fontawesome-svg-core";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "@web/globals.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#ffffff" />
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
		</>
	);
}
