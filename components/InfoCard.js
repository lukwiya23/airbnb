import Image from 'next/image'
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

function InfoCard({img, description,location, title, star, price, total}) {
    return (
        <div className="flex rounded-2xl mt-4 mb-5 ml-3 py-7 px-2 border-b cursor-pointer hover:opacity-95  transition duration-250 ease-out hover:shadow-lg pr-4 shadow  border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image  className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer active:text-red-400 hover:fill-current" />
                </div>
                <h4 className="text-xl">{title }</h4>
                <div className="border-b w-12 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

            <div className="flex justify-between items-end pt-5 ">
                <p className="flex items-center">< StarIcon className="h-5 text-red-400"/>
                {star}
                </p>

                <div>
                <p className="text-lg font-semibold pb-2 lg:text-2xl" >{price}</p>
                <p className="text-right font-extralight">{total}</p>
            </div>
            </div>

            

            </div>
    </div>
    )
}

export default InfoCard
