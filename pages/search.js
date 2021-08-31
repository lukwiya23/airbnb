import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  //format date
  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      {/* main section */}
      <main className="flex">
        <section>
          <p className="text-xs py-5">
            300+ stays available - {range}- for {noOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Homes within {location}
          </h1>

          <div className="hidden  lg:inline-flex mb-5 text-gray-800 space-x-4">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          {/* result cards */}
          <div className="flex flex-col">
          {searchResults?.map((item) => (
            <InfoCard
            key={item.img}
              img={item.img}
              description={item.description}
              total={item.total}
              location={item.location}
              star={item.star}
              price={item.price}
              title={item.title}
            />
            
          ))}
          </div>
        </section>

        <section className="sticky hidden xl:inline-flex xl:min-w[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

//server side rendering for Search Results
export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
  props: {
    searchResults
  }}
}
