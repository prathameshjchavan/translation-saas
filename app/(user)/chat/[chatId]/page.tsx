import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";
import { Fragment } from "react";

type Props = {
	params: {
		chatId: string;
	};
};

const ChatPage = async ({ params: { chatId } }: Props) => {
	const session = await getServerSession(authOptions);

	return (
		<Fragment>
			{/* Admin Controls */}

			{/* ChatMember Badge */}

			{/* ChatMessages */}

			{/* ChatInput */}
			<ChatInput chatId={chatId} />
		</Fragment>
	);
};

export default ChatPage;
