import AdhocChore from "@/components/adhoc-chore";
import { DateBar } from "@/components/date-bar";
import { determineDate } from "@/lib/determineDate";
import { prisma } from "@/lib/prisma";

function getSearchParam(params: Record<string, string | string[] | undefined>, key: string) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

type SearchParamsType = Record<string, string | string[] | undefined>;

export default async function Home({ searchParams }: { searchParams: SearchParamsType }) {
  const thisWeek = determineDate('thisWeek');
  const startDateParam = getSearchParam(searchParams, 'startDate');
  const endDateParam = getSearchParam(searchParams, 'endDate');
  const startDate = startDateParam ? new Date(startDateParam) : thisWeek.startDate;
  const endDate = endDateParam ? new Date(endDateParam) : thisWeek.endDate;
  const chores = await prisma.chore.findMany();


  return (
    <>
      <div className="p-4 flex flex-col gap-y-4">
        <h2>Keep track of our chores</h2>

        <DateBar />
        <ul className="flex flex-col gap-y-2">
          {chores.map((chore) => (
            <li key={chore.id}><AdhocChore id={chore.id} title={chore.title} description={chore.description} startDate={startDate} endDate={endDate} /></li>
          ))}
        </ul>
      </div>
    </>
  );
}
