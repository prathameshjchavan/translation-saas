import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import { Fragment } from "react";

const ChatPage = async () => {
	const session = await getServerSession(authOptions);

	return (
		<Fragment>
			{/* Admin Controls */}

			{/* ChatMember Badge */}

			{/* ChatMessages */}

			{/* ChatInput */}
			<ChatInput chatId="abc" />
		</Fragment>
	);
};

export default ChatPage;
