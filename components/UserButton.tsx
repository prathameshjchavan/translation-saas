"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { Fragment } from "react";
import { StarIcon } from "lucide-react";

const UserButton = ({ session }: { session: Session | null }) => {
	const subscription = useSubscriptionStore((state) => state.subscription);

	if (!session)
		return (
			<Button variant="outline" onClick={() => signIn()}>
				Sign In
			</Button>
		);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar name={session.user?.name} image={session.user?.image} />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="text-center
"
			>
				<DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{subscription === undefined && (
					<DropdownMenuItem>
						<LoadingSpinner />
					</DropdownMenuItem>
				)}
				{subscription?.role === "pro" && (
					<Fragment>
						<DropdownMenuLabel className="text-xs flex items-center justify-center space-x-1 text-[#E935C1] animate-pulse">
							<StarIcon fill="#E935C1" />
							<p>PRO</p>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							Manage
							{/* <ManageAccountButton /> */}
						</DropdownMenuItem>
					</Fragment>
				)}
				<DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserButton;
