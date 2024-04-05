import { useState } from "react"

type picProps = {
    src: string
}

export default function Pic({src}:picProps) {

    const [cl, setCl] = useState('carousel-image')


    const setVertical = () => {
        setCl('carousel-image vertical')
    }    

    return(
        <img className={cl} src={src}  onLoad={evt => {
           evt.currentTarget.naturalWidth < evt.currentTarget.naturalHeight && setVertical()}} ></img>
    )

}