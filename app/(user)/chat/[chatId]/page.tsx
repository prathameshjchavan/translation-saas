import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import ChatMembersBadge from "@/components/ChatMembersBadge";
import ChatMessages from "@/components/ChatMessages";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
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

	return (
		<Fragment>
			{/* Admin Controls */}

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
