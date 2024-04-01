import { Disclosure } from "@headlessui/react";

export default function Footer() {
    return (
        <Disclosure as="footer" className="bg-transparent py-12 px-4 w-full bottom-0">
            <a href='https://www.instagram.com/' ><img src="icons/instagram.svg" className="block h-8 w-8 mx-auto" aria-hidden="true"/></a>
        </Disclosure>
    )
}