export default function AboutPage() {
  return (
    <div className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4 mb-36 mt-24 lg:my-0 lg:py-[8vh] lg:flex-nowrap">
      <img
        className="max-w-96 max-h-96 py-8 px-16 lg:px-16 mx-auto self-center xs:-translate-y-12 xl:-translate-y-0"
        src="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1712534970/z-Ola%20K.-Portfolio/i7xao8etuufkbwb0t3cv.jpg"
      />
      <div className="about-text font-header py-10 px-8 sm:px-12 lg:p-10 my-1 lg:my-4">
        {/* i deleted ml-36 for it looks weird */}
        <p className="pt-16 text-md md:px-16 lg:py-8 lg:px-24">
          <span className="text-justify">
            Mam na imię Ola.&nbsp; Jestem fotografką i operatorką. <br />
            <br /> Studiuję realizację obrazu w Szkole Filmowej im. K.
            Kieślowskiego w Katowicach. <br />
            <br />
          </span>
          Przyjmuję zlecenia, jestem otwarta na współpracę. <br /> <br />
          Zróbmy coś razem!
          <br />
          <br />
          <span className="flex pt-2">
            <img
              src="/icons/phone.svg"
              className="block self-center h-5 w-5"
              aria-hidden="true"
            />
            &nbsp; 669855919 <br />
          </span>
          <span className="flex pt-1">
            <img
              src="/icons/mail.svg"
              className="block self-center h-5 w-5 translate-y-[1px]"
              aria-hidden="true"
            />{" "}
            <a href="mailto:pola.brogosiewicz@gmail.com">
              &nbsp; ola.kasprzykiewicz@gmail.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
