import Image from 'next/image'
import {SearchIcon,
GlobeAltIcon,
MenuIcon,
UserCircleIcon,
UsersIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">


            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill" objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* middle -Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input  className="pl-5 flex-grow bg-transparent text-gray-600 placeholder-gray-400 outline-none" type="text" placeholder="Start your search"/>
                <SearchIcon className="mx-2 hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

            </div>
          
            {/* right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer" >Become a Host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}
 
export default Header
