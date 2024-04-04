type cardProps = {
    imageUrl: string,
    seriesTitle: string,
    seriesUrl: string,
}

export default function ProjectCard ({imageUrl, seriesTitle, seriesUrl }:cardProps ) {
    return(
        <div className="max-w-full mx-8 my-10 md:mx-4 ">
            <a href={seriesUrl}>
                <img className='md:max-w-96 md:max-h-96' src={imageUrl} />
                <div className="py-6  text-center ">
                    <span className='font-header text-2xl md:text-xl'>{seriesTitle}</span>
                </div>
            </a>
        </div>
    )
}