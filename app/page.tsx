import AdhocChore from "@/components/adhoc-chore";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const chores = await prisma.chore.findMany();
  return (
    <>
      <div className="p-4 flex flex-col gap-y-4">
        <h2>Keep track of our chores</h2>

        <ul className="flex flex-col gap-y-2">
          {chores.map((chore) => (
            <li key={chore.id}><AdhocChore title={chore.title} description={chore.description} /></li>
          ))}
        </ul>
      </div>
    </>
  );
}
