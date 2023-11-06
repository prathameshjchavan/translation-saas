import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProvider from "@/components/ClientProvider";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/SubscriptionProvider";
import { Toaster } from "@/components/ui/toaster";

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
		<html lang="en">
			<body className="flex flex-col h-screen">
				<ClientProvider>
					<FirebaseAuthProvider>
						<SubscriptionProvider>
							<ThemeProvider
								attribute="class"
								defaultTheme="system"
								enableSystem
								disableTransitionOnChange
							>
								<Header />
								{children}
								<Toaster />
							</ThemeProvider>
						</SubscriptionProvider>
					</FirebaseAuthProvider>
				</ClientProvider>
			</body>
		</html>
	);
}
