import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import ListCard from './components/ListCard/ListCard';

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <main>
      {/* <h1 className={"font-poppins"}>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <div className="flex p-5 sm:gap-x-4 gap-y-5 flex-col sm:flex-row">
        <ListCard title={"General"} />
        <ListCard title={"Exercise"} />
        <ListCard title={"Music"} />
      </div>
      
      <button className={"bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"}>Complete Day!</button>
    </main>
  )
}
