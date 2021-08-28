import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardData}) {
  return (
    <div>
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
{/* pulling data from an api */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((item) => (
          <SmallCard img={item.img} location={item.location} distance={item.distance}  />
        ))}
        </div>
        </section>

          <section>
            <h2 className="font-semibold text-4xl py-8">Live anywhere you want.</h2>
            {/* pulling medium cards data */}
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item)=>(
              <MediumCard key={item.img} title={item.title} img={item.img} />
            ))}
            </div>
          </section>
              <LargeCard 
              img='https://links.papareact.com/4cj'
              title='The Best Outdoor Experience'
              description='Wishlist curated by airbnb'
              buttonText='Get Inspired'
              />
           
      </main>
      <Footer /> 
      
    </div>
  );
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then(
    (res) => res.json()
  );

    const cardData = await fetch("https://links.papareact.com/zp1")
    .then(
      (res)=> res.json()
    );

  return{
    props:{
      exploreData,
      cardData
    }
  }
}

