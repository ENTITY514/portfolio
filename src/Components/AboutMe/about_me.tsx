import { ImageUI } from "../../UI/Image/image"
import style from "./about_me.module.css"

export const AboutMe: React.FC = () => {
    return (
        <div className={style.container}>
            <h1>Обо мне</h1>
            <div className={style.about}>
                <p>
                    Я Frontend разработчик на React/Next. Программированием заинтересовался 4 года назад. Последнии 2 года
                    разрабатываю веб-приложения на React. Хочу работать в команде для дальнейшего
                    совместного развития.
                    На данный момент имею оконченное высшее образование по профессии учитель
                    физики-математики(бакалавр).
                </p>
                <p>
                    Люблю решать задачи различного рода сложности. Причем чем интереснее и нестандартнее задача тем
                    лучше.
                    Довольно самостоятелен в обучении и люблю это дело; относительно хорошо понимаю математику и физику.
                    Из своих хобби могу отметить армреслинг, воллейбол, настольный теннис, игру в шахматы, ну и конечно же программирование.
                </p>
                <p>
                    Некоторое время ввел канал на ютубе по воксельному моделированию, который на данный
                    момент является временно заброшенным. Но в скором времени буду выпускать ролики по программированию и не только.
                    <a href="https://www.youtube.com/channel/UCO6BWRuER3VV7By7n_HidNg">( Ссылка )</a>.
                </p>
            </div>
        </div>
    )
}