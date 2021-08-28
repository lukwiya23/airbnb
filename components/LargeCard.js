import Image from 'next/image'

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 ">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img}  className="rounded-2xl" layout="fill" objectFit="cover"/>
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-80">{title}</h3>
                <p>{description}</p>
                <button className="mt-5 cursor-pointer text-md text-white bg-gray-900 px-4 py-2 rounded-lg hover:scale-105 transition duration-200 ease-in-out">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
