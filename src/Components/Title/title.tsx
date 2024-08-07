import { ImageUI } from "../../UI/Image/image"
import style from "./title.module.css"

export const Title: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1 className={style.name}>Бабич Иман Денисович</h1>
                <h2 className={style.dev}>Frontend разработчик на React/Next</h2>
                <div className={style.contacts}>
                    <div className={style.date}>Возраст: 23года</div>
                    <div className={style.contact}>Телефон: +7 705 826 1021</div>
                    <div className={style.contact}>Почта: xwx.iman.xwx@gmail.com</div>
                    <div className={style.contact}>Github: <a href="https://github.com/ENTITY514" target={"_blank"}>
                        https://github.com/ENTITY514</a></div>
                </div>
            </div>
            <div className={style.image}>
                <div className={style.image_wrapper}>
                    <ImageUI url="/avatar3.jpg" cover />
                </div>
            </div>

        </div>
    )
}