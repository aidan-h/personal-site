import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
	title: "Aidan Hammond",
	description: "Aidan Hammond's personal website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/socials/codeberg.svg" />
			</head>
			<body>{children}</body>
		</html>
	);
}
