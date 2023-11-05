"use client";

import * as z from "zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
	input: z.string().max(1000),
});

const ChatInput = ({ chatId }: { chatId: string }) => {
	const { data: session } = useSession();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			input: "",
		},
	});

	return (
		<div className="sticky bottom-0">
			<Form {...form}>
				<form className="flex space-x-2 p-2 rounded-t-xl max-w-4xl mx-auto bg-white border dark:bg-slate-800">
					<FormField
						control={form.control}
						name="input"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										className="border-none bg-transparent dark:placeholder:text-white/70"
										placeholder="Enter a message in ANY language..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="bg-violet-600 text-white">
						Send
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default ChatInput;
