import { authOptions } from "@/auth";
import AdminControls from "@/components/AdminControls";
import ChatInput from "@/components/ChatInput";
import ChatMembersBadge from "@/components/ChatMembersBadge";
import ChatMessages from "@/components/ChatMessages";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Fragment } from "react";

type Props = {
	params: {
		chatId: string;
	};
};

const ChatPage = async ({ params: { chatId } }: Props) => {
	const session = await getServerSession(authOptions);
	const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
		(doc) => doc.data()
	);

	const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
		.map((doc) => doc.id)
		.includes(session?.user.id!);

	if (!hasAccess) redirect("/chat?error=permission");

	return (
		<Fragment>
			<AdminControls chatId={chatId} />
			<ChatMembersBadge chatId={chatId} />

			<div className="flex-1">
				<ChatMessages
					chatId={chatId}
					session={session}
					initialMessages={initialMessages}
				/>
			</div>

			<ChatInput chatId={chatId} />
		</Fragment>
	);
};

export default ChatPage;
