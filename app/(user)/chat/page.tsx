import ChatList from "@/components/ChatList";

type Props = {
	params: {};
	searchParams: {
		error: string;
	};
};

const ChatsPage = ({ searchParams: { error } }: Props) => {
	return (
		<div>
			{/* ChatList */}
			<ChatList />
		</div>
	);
};

export default ChatsPage;
