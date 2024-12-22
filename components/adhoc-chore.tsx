import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";

interface AdhocChoreProps {
	title: string,
	description: string,
}

export default async function AdhocChore({ title, description }: AdhocChoreProps) {
	const currentCount = 0;
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="flex flex-row gap-2 items-center w-full">
					<p>{`Priscilla count: ${currentCount}`}</p>
					<Button>Add</Button>
				</div>
				<div className="flex flex-row gap-2 items-center w-full">
					<p>{`Reino count: ${currentCount}`}</p>
					<Button>Add</Button>
				</div>
			</CardContent>
		</Card>
	)

}
