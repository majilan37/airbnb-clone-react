import LargeCard from "./LargeCard"
import MediumCard from "./MediumCard"
import SmallCards from "./SmallCards"

function Main() {
    return (
        <main className="relative max-w-[900px] mx-auto py-8 px-6 lg:px-0 " >
          <h2 className='text-4xl font-semibold mb-4'>Explore Nearby</h2>
          <SmallCards />
          <h2 className='text-4xl font-semibold my-4' >Live Anywhere</h2>
          <MediumCard />
          <LargeCard />
        </main>
    )
}

export default Main
