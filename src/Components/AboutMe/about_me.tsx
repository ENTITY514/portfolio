import { ImageUI } from "../../UI/Image/image"
import style from "./about_me.module.css"

export const AboutMe: React.FC = () => {
    return (
        <div className={style.container}>
            <h1>Обо мне</h1>
            <div className={style.about}>
                <p>
                Я frontend разработчик на react. Программированием заинтересовался 3 года назад. Последний год
                активно учусь разработке на react. Активно ищк работу. Хочу работать в команде для дальнейшего совместного развития.
                На данный момент имею неоконченное высшее образование по профессии учитель физики-математики(бакалавр).
                Претендую на красный диплом.
                </p>
                <p>
                Люблю решать задачи различного рода сложности. Причем чем интереснее и нестандартнее задача тем лучше. 
                Довольно самостоятелен в обучении и люблю это дело; относительно хорошо понимаю математику и физику. 
                Из своих хобби могу отметить армреслинг, игру в шахматы, ну и конечно же программирование. 
                Немного разбираюсь в adobe illustrator(делал иконки проектов) и GIMP и Blender.
                </p>
                <p>
                Некоторое время ввел канал на ютубе по воксельному моделированию, который на данный момент является заброшенным.
                <a href="https://www.youtube.com/channel/UCO6BWRuER3VV7By7n_HidNg">( Ссылка )</a>.
                Также в некотором роде курирую одного начинающего разрабочика с которым познакомился на хакатоне.
                </p>
            </div>
        </div>
    )
}