import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
  { name: 'Start', href: '#', current: true },
  { name: 'Projekty', href: '#', current: false },
  { name: 'O mnie', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
  < div className='py-2'>
      <Disclosure as="nav" className="bg-transparent">
        {({ open }) => (
          <>
            <div className="px-2 px-6 lg:mx-4 lg:py-4">
              <div className="relative flex h-16 items-center ">
                      {/* Desktop nav */}
                <div>
                  <span className="font-header hover:text-gray-600/75 text-xl lg:text-3xl hover:cursor-none">Pola Brogosiewicz</span>
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
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" inset-y-0 left-0 flex items-center sm:hidden justify-end ">
                  {/* mobile menu buttons*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bottom-50 left-50 hover:cursor-crosshair">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <img src='/icons/crocodile.svg' className="block h-10 w-10" aria-hidden="true" />
                    ) : (
                      <img src='/icons/menu_icon.svg' className="block h-10 w-10" aria-hidden="true" />

                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            {/* mobile nav */}
            <Disclosure.Panel className="sm:hidden">
              <div className="absolute space-y-1 px-2 pb-3 pt-10 mt-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'underline' : 'hover:text-gray',
                      'block rounded-md px-3 py-5 text-2xl font-header text-center underline-offset-8 '
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            
          </>
        )}
      </Disclosure>
  </ div>
  )
}
