import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ClientProvider from "@/components/ui/ClientProvider";

export const metadata: Metadata = {
	title: "Translation - SaaS",
	description: "Created by Prathamesh Chavan",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClientProvider>
			<html lang="en">
				<body className="flex flex-col min-h-screen">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClientProvider>
	);
}
