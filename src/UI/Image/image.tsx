import React from "react"
import style from "./image.module.css"

interface IImageProps {
    url: string
    cover?: boolean
}

export const ImageUI: React.FC<IImageProps> = ({ url, cover = false }) => {
    const [isView, setIsView] = React.useState<boolean>(false)
    if (isView) {
        return (
            <div className={style.container} onClick={() => { setIsView(true) }}>
                <div className={style.img} style={
                    {
                        backgroundImage: "url(" + url + ")",
                        backgroundSize: cover ? "cover" : "contain"
                    }}></div>
            </div >
        )

    }
    else {
        return (
            <div className={style.container} onClick={() => { setIsView(true) }}>
                <div className={style.img} style={
                    {
                        backgroundImage: "url(" + url + ")",
                        backgroundSize: cover ? "cover" : "contain"
                    }}></div>
            </div >
        )
    }
}