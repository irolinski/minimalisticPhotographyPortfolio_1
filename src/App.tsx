import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import SeriesCard from './Components/SeriesCard'

function App() {

  return (
    <div className="min-h-full">
    <Navbar />
      <div className="flex flex-wrap mx-auto justify-around">
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Dokuczanie radiem z góry'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Wymuszanie przez tortury'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Usypianie ekstra proszkiem'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Uduszenie przez pończoszkę'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Uduszenie przez pończoszkę'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Uduszenie przez pończoszkę'
        seriesUrl=''
        />
        <SeriesCard
        imageUrl='https://res.cloudinary.com/dtjtqp7r1/image/upload/v1711880691/ola/uxzigcrb3dafjuhrsh98.jpg'
        seriesTitle='Uduszenie przez pończoszkę'
        seriesUrl=''
        />
      </div>
    <Footer />
    </div>
  )
}

export default App
