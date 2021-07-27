import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=UA-89595129-1"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'UA-89595129-1');
							`,
						}}
					/>
				</Head>
				<body className="bg-gray-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
