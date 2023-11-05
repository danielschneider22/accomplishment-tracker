import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session)
  
  return (
    <main>
      <h1 className={"font-poppins"}>Hello {session && <span>{session.user!.name}</span>}</h1>
    </main>
  )
}
