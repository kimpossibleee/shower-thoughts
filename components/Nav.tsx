'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
// import { Navbar } from `flowbite-react`;

let res: any = null

export default function Nav() {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(res)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        fetchProviders();
    }, []);


    return (<>

        <nav className='mx-16 mt-10 flex-between'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/bulb.png'
                    alt="shower thoughts logo"
                    width={60}
                    height={60}
                    className='object-contain'
                />
                <p className="flex items-center text-xl font-extrabold ">Shower<span className="bg-blue-100 text-blue-800 text-l font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Thoughts</span></p>
            </Link>

            {/* Default */}
            <div className='sm:flex hidden'>
                {session?.user ?
                    <div className='flex gap-3 md:gap-5'>
                        {/* Jot Idea button */}
                        <Link href='/jotidea' className='my_button'>
                            Jot Idea
                        </Link>
                        {/* Sign Out button */}
                        <button type='button' onClick={() => signOut()} className='my_button'>Sign Out</button>
                        {/* Profile picture */}
                        <Link href='/'>
                            <Image src={session?.user.image} alt="profile picture" width={40} height={40} className='rounded-full' />
                        </Link>
                    </div> :
                    <>
                        {/* Shows the buttons for the sign up page in relation to provider */}
                        {providers &&
                            Object.values(providers).map((provider) => (

                                <button key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                    Sign in with Google
                                </button>

                            ))}
                    </>
                }
            </div>

            {/* Mobile dropdown navbar */}
            <div className='sm:hidden flex relative'>
                {session?.user ?
                    <div className='flex'>
                        <Image src={session?.user.image} alt="profile picture" width={40} height={40} className='rounded-full' onClick={() => setToggleDropdown((prev) => !prev)} />

                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href='/profile' className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    Profile
                                </Link>
                                <Link href='/jotdown' className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    Jot Idea
                                </Link>
                                <button type='button' onClick={() => {
                                    setToggleDropdown(false)
                                    signOut()
                                }
                                } className='my_button
     mt-3'>Sign Out</button>
                            </div>
                        )}
                    </div>
                    :
                    <>
                        {/* Shows the buttons for the sign up page in relation to provider */}
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }}
                                    className='my_button'>
                                    Sign in
                                </button>
                            ))}
                    </>}

            </div>


        </nav>
    </>
    )
}
