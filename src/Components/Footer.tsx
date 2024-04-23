import { useEffect, useState } from "react";

type footerProps = {
  location: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer({ location }: footerProps) {
  const [startState, setStartState] = useState(false);

  useEffect(() => {
    location.includes("start") ? setStartState(true) : setStartState(false);
  });

  return (
    <footer
      className={classNames(
        startState ? "xl:hidden" : "",
        "bg-transparent py-12 px-4 w-full bottom-0"
      )}
    >
      <a href="https://www.instagram.com/nadoleola" target="_blank">
        <img
          src="icons/instagram.svg"
          className="block h-8 w-8 mx-auto"
          aria-hidden="true"
        />
      </a>
    </footer>
  );
}
