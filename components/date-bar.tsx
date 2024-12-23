import Link from "next/link";
import { Button } from "./ui/button";
import { determineDate } from "@/lib/determineDate";

export function DateBar() {
	const thisWeek = determineDate('thisWeek');
	const lastWeek = determineDate('lastWeek');
	const thisMonth = determineDate('thisMonth');
	const lastMonth = determineDate('lastMonth');
	return (
		<div className="space-x-2">
			<Link href={{
				pathname: '/',
				query: { startDate: thisWeek.startDate.toJSON(), endDate: thisWeek.endDate.toJSON() }
			}}>
				<Button>This week</Button>
			</Link>
			<Link href={{
				pathname: '/',
				query: { startDate: lastWeek.startDate.toJSON(), endDate: lastWeek.endDate.toJSON() }
			}}>
				<Button>Last week</Button>
			</Link>
			<Link href={{
				pathname: '/',
				query: { startDate: thisMonth.startDate.toJSON(), endDate: thisMonth.endDate.toJSON() }
			}}>
				<Button>This month</Button>
			</Link>
			<Link href={{
				pathname: '/',
				query: { startDate: lastMonth.startDate.toJSON(), endDate: lastMonth.endDate.toJSON() }
			}}>
				<Button>Last month</Button>
			</Link>
		</div>
	)
}
