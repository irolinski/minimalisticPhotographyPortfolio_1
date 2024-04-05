

export default function AboutPage () {

    return(
        <div className="flex flex-wrap mx-auto justify-around sm:p-16 mx-4 mb-36 mt-24" > 
            <img className='max-w-72 max-h-72  py-8 px-16 lg:px-16 mx-auto self-center' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/La_velada%2C_por_Rafael.jpg/1200px-La_velada%2C_por_Rafael.jpg' />
            <div className="about-text font-header py-10 px-12 lg:p-10 my-1 lg:my-4">
                <p className="pt-16 text-md md:px-16 lg:py-8 lg:px-24">
                    Nazywam się Pola.<br /> Jestem fotografką/reporterką. <br /><br />
                    Otrzymałam tytuł inżyniera na Uniwersytecie Gdańskim.  <br /><br />
                    Obecnie przyjmuję zlecenia. <br /> <br /> 
                    Kontakt: <br />
                    <a href="mailto:pola.brogosiewicz@gmail.com">pola.brogosiewicz@gmail.com</a>  
                </p>
            </div>
        </div>
    )
}