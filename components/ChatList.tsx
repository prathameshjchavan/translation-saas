import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMembers";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import ChatListRows from "./ChatListRows";
import { authOptions } from "@/auth";

const ChatList = async () => {
	const session = await getServerSession(authOptions);

	const chatSnapshot = await getDocs(
		chatMembersCollectionGroupRef(session?.user.id!)
	);

	const initialChats = chatSnapshot.docs.map((doc) => ({
		...doc.data(),
		timestamp: null,
	}));

	return <ChatListRows initialChats={initialChats} />;
};

export default ChatList;
