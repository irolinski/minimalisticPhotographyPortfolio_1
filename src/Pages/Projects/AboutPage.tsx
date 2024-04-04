

export default function AboutPage () {

    return(
        <div className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4"> 
            <img className='max-w-96 max-h-96 px-24 py-8 lg:px-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/La_velada%2C_por_Rafael.jpg/1200px-La_velada%2C_por_Rafael.jpg' />
            <div className="font-header py-10 px-16 lg:p-10 my-1 lg:my-4">
                <p className="pt-16 text-md border-t-2 md:px-16 lg:py-8 lg:border-t-0 lg:border-l-2 border-color-gray">
                    Nazywam się Pola.<br /> Jestem fotografką/reporterką. <br /><br />
                    Otrzymałam tytuł inżyniera na Uniwersytecie Gdańskim.  <br /><br />
                    Obecnie przyjmuję zlecenia. <br /> <br /> 
                    Kontakt: <br />
                    pola.brogosiewicz@gmail.com  <br /> <br />

                </p>
            </div>
        </div>
    )
}