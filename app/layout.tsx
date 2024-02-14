import type { Metadata } from "next";
import "./globals.css";

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
			<body>{children}</body>
		</html>
	);
}
