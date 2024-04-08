import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type navbarProps = {
  location: string;
}

export default function Navbar({location}: navbarProps) {

  const [startState, setStartState] = useState(false);
  const [projectsState, setProjectsState] = useState(false);
  const [aboutState, setAboutState] = useState(false); 


  useEffect(() => {
    location.includes('start') ? setStartState(true) : setStartState(false);
    location.includes('projekty') ? setProjectsState(true) : setProjectsState(false);
    location.includes('o-mnie') ? setAboutState(true) : setAboutState(false); 
  })


    const navigation = [
    { name: 'Start', href: '/#/start', current: startState },
    { name: 'Projekty', href: '/#/projekty', current: projectsState },
    { name: 'O mnie', href: '/#/o-mnie', current: aboutState },
  ]

  return (
      <Disclosure as="nav" className="bg-white py-2">
        {({ open }) => (
          <>
            <div className={classNames(startState ? 'hidden' : '', 'pl-4 pr-1 pb-2 sm:px-8 sm:pt-2 lg:mx-4 lg:pt-4 lg:pb-8')} >
              <div className="relative flex h-16 items-center">
                {/* Desktop nav */}
                <div>
                  <span className="font-header hover:text-gray-600/75 text-2xl lg:text-3xl hover:cursor-none">Ola Kasprzykiewicz</span>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end ">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'underline underline-offset-8' : 'hover:text-gray font-light',
                            'px-3 py-2 my-2 text-md font-medium font-header hover:cursor-crosshair'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="inset-y-0 left-0 flex items-center sm:hidden justify-end ">
                  {/* mobile menu buttons*/}
                  <Disclosure.Button 
                  className="relative inline-flex items-center justify-end
                  rounded-md p-2 text-gray-400 focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-white
                  hover:cursor-crosshair"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <img src='/icons/close_menu.svg' className="block h-10 w-10 z-20" aria-hidden="true" />
                    ) : (
                      <img src='/icons/open_menu.svg' className="block h-10 w-10 z-20" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            {/* mobile nav */}
            <Disclosure.Panel style={{backgroundColor: '#FFFFFF'}} className="sm:hidden fixed inset-0 z-10">
              <div className="absolute bg-white space-y-1 mt-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 p-28">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'underline' : 'hover:text-gray',
                      'block rounded-md px-3 py-5 text-2xl font-header text-center underline-offset-8 hover:cursor-crosshair '
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  )

  module.exports = navigation;

}

