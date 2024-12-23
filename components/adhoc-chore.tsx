import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { prisma } from "@/lib/prisma";
import { addAddhocChore } from "@/lib/actions";
import { DatePickerDemo } from "./datepicker";

interface UserAdhocChoreProps {
	userId: string,
	choreId: string,
	startDate: Date,
	endDate: Date,
}

async function UserAdhocChore({ userId, choreId, startDate, endDate }: UserAdhocChoreProps) {
	const user = await prisma.user.findUnique({ where: { id: userId }});
	const chores = await prisma.adhocChoreCounter.findMany({
		where: { 
			userId,
			choreId, 
			dateAdded: { gte: startDate, lte: endDate }
		}
	})

	const populatedAddAdhocChore = addAddhocChore.bind(null, userId, choreId);
	return (
		<form 
			className="flex flex-row gap-2 items-center w-full"
			action={populatedAddAdhocChore}
		>
			<p>{`${user?.name} count: ${chores.length}`}</p>
			<Button>Add</Button>
			<DatePickerDemo />
		</form>

	)
}

interface AdhocChoreProps {
	id: string,
	title: string,
	description: string,
	startDate: Date,
	endDate: Date,
}

export default async function AdhocChore({ id, title, description, startDate, endDate }: AdhocChoreProps) {
	const users = await prisma.user.findMany({ orderBy: { name: 'asc' }});

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				{users.map((user) => (
					<UserAdhocChore key={user.id} userId={user.id} choreId={id} startDate={startDate} endDate={endDate} />
				))}
			</CardContent>
		</Card>
	)

}
