import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from 'next/dist/client/router'
import {format} from 'date-fns'


function Search() {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    //format date
    const formatStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formatEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formatStartDate} - ${formatEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

        {/* main section */}
        <main className="flex">
            <section>
                <p className="text-xs">300+ stays  available - {range}- for {noOfGuests} number of guests</p>

                <h1 className="text-3xl font-semibold mt-2 mb-6">Homes within {location}</h1>

                <div className="hidden  lg:inline-flex mb-5 text-gray-800 space-x-4">
                    <p className="button">Cancellation flexibility</p>
                    <p className="button">Type of place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms and Beds</p>
                    <p className="button">More Filters</p>
                </div>
            </section>
        </main>


            < Footer />
        </div>
    )
}

export default Search
