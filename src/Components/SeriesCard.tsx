type cardProps = {
    imageUrl: string,
    seriesTitle: string,
    seriesUrl: string,
}

export default function ({imageUrl, seriesTitle, seriesUrl }:cardProps ) {
    return(
        <div className="max-w-full mx-8 my-10 md:mx-4 ">
            <a href={seriesUrl}>
                <img className='md:max-w-96' src={imageUrl} />
                <div className="py-6">
                    <span className='font-header text-xl'>{seriesTitle}</span>
                </div>
            </a>
        </div>
    )
}