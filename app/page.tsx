import Feed from "@components/Feed"
import Banner from "@components/Banner"


export default function Home() {
    return (
        <section className='w-full flex-center flex-col'>
            <Banner />
            {/* INTRODUCTION SECTION */}
            <h2 className='head_text text-center'>
                <span className='block mt-8'>
                    Share Your Brilliant, Quirky Ideas with the Global Community!
                </span>
            </h2>
            <p className='description text-center'> Welcome to Shower Thoughts, the innovative platform where creativity knows no bounds. Join a vibrant community of free thinkers, dreamers, and visionaries as you share your wildest, most intriguing ideas with the world. Embrace the power of inspiration that strikes during your daily showers and let your thoughts spark conversations, ignite imaginations, and reshape perspectives.
            </p>

            {/* Show the Feed Component */}
            <Feed />

        </section>
    )
}
