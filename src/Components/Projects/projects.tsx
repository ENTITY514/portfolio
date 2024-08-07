import { ImageUI } from "../../UI/Image/image"
import style from "./projects.module.css"

export const Projects: React.FC = () => {
    return (
        <div className={style.container}>
            <h1 className={style.portfolio}>Портфолио</h1>
            <div className={style.box}>
                <h2 className={style.title}>Pet-проект</h2>
                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Cross Engine</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Мой проект, который в долгосрочной перспективе я хочу реализовать до полноценного проекта. На данный момент я переписываю архитектуру проекта. Поскольку
                                нынешняя архитектура была не удобной для дальнейшего развития. Основным направлением является разработка 2d игр в браузере.
                                Для разработки используется React, с RTK, Backend написан на Django с использованием RestFramework. Для отображения 2d графики используется библиотека PixiJS,
                                а для реализации физики используется MatterJS. В будущем планируется написать собственные библиотеки для отображения и симуляции. В целом на данный проект у меня большие планы.
                                Ниже приведена ссылка на deploy. Там название MathLab, оно было использовано для дипломной работы. Там доступно 3 приложения для демонстрации возможностей
                                Для того чтобы их запустить нажмите на вкладку test.
                                P.S. UI оставляет желать лучшего)
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/math-lab">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://math-lab-red.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"math-lab-red.vercel.app_engine.png"} cover />
                    </div>
                </div>

                <h2 className={style.title}>Проекты на React/Next</h2>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Outage Detector</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект написан на NextJS. Разрабатывался для программы IT Incubator. Прошли несколько этапов, но до гранта так и не дошли. На данный момент разработка проекта прекращена.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/outage-detector">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://outage-detector.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"d9ee5a729f1c5698088971921af74300.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Lion IT School</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект написан на NextJS. Я в данном проекте курировал frontend разработку и работал в основном над backend. Backend написан с использованием DjangoRestFramework.
                            </p>
                            <div className={style.links}>
                                Ссылки на github и deploy могу предоставить по необходимости.
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"a6e19e150e1688847f1da88e3f4b5224.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Decentrathon</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект написан на React. Разрабатывался для хакатона Decetrathon. Наша команда Undefined одержала победу в одной из номинаций и заняла 3 место.
                                На данный момент frontend проекта работает, но backend прекратил свою работу.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/decentrathon">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://decentrathon-tan.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"photo_2023-06-16_11-27-51.jpg"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Rastau</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект написан на NextJS. Разрабатывался как стартап, но на данный момент проект заморожен. В целом это был интересный опыт, поскольку взаимодействие с командой
                                в данном проекте было больше. Плюсом улучший свой опыт работы с NextJS и Figma.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/RastauKZ/issuer-frontend">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://issuer-frontend.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"13f57f9c02d7e0f6054f513fdeb23789.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Calculator Constructor</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект на котором я освоил работу мехянизма Drag and Drop элементов.
                                Тут можно собрать калькулятор расставив элементы как вам угодно.
                                После запуска можно произвести простые рассчеты.
                                Тут был мой первый опыт работы с Figma. Калькулятор создан с учетом ТЗ.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/calculator-constructor">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://calculator-constructor-eight.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"calculator-constructor-eight.vercel.app_.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>GDrive</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект, который создавался для хакатона ITJunior. Моей целью было создать аналог GoogleDrive, но с повышенной
                                безопасностью. Для это я использовал механизм асимметричнного шифрования при помощи двух ключей. В этом мне помогла библиотека @daotl/cryptico.
                                Также я добавил простой текстовый редактор при помощи библиотеки DraftJS. Все было написано за 2 дня.
                                Можно создать только текстовый документ и выполнить его редактирование. Файл будет сохранен в защифрованном виде в локальном хранилище.
                                В данном хакатоне я занял 5 место среди всех команд.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/g_drive">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://g-drive-one.vercel.app/main">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"g-drive-one.vercel.app_main.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Music Player</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Музыкальный плеер, который я создавал чисто для практики, когда изучал React.
                                Благодаря ему я начал понимать как работают хуки и react в целом. после этого я начал изучать
                                Redux поскольку это стало необходимостью для дальнейшего роста.
                                Проект в целом работате медленно и имеет ряд багов.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/react-mp3-player">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://react-mp3-player.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"react-mp3-player.vercel.app_PlayList_DOOM.png"} cover />
                    </div>
                </div>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>ToDo List</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Список задач. Первый проект в котором я испоьзовал typescript. Данный проект я
                                писал дважды. Первый раз с js, второй  c ts. Там и там я использовал библиотку react-transition-group.
                                Именно с этого проекта начался мой путь в react разработке.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/todo-react-app-ts-version-2.0">Github</a>
                                </div>
                                <div className={style.link}>
                                    <a href="https://todo-react-app-ts-version-2-0.vercel.app/">Deploy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"todo-react-app-ts-version-2-0.vercel.app_.png"} cover />
                    </div>
                </div>
            </div>
            <div className={style.box}>
                <h2 className={style.title}>Остальные проекты</h2>

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>StarPy</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект, который я выполнил для лабораторных работ по асторономии. Основной задачей было перевести в
                                электронный формат таблицу звездного неба 1950 года.
                                В данном проекте я использовал пакет Tesseract OCR для чтения
                                текста с изображения, ряд библиотек по работе с pdf и openCV для работы с изображением.
                                Как итог я смог перевести в формат JSON более 12000 звезд из таблицы с кривой разметкой с точностью около 80%.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/starpy">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"starpy.png"} cover />
                    </div>
                </div>


                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>Eclion</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Мой проект написанный на C#. Я одновременно учил C#, разбирался в ООП и писал игру.
                                Для меня это был самый яркий опыт программирования.
                                Написан без движка(Таково было условие gamejam'а) с использованием порта
                                библиотеки SFML.
                                Писал для Gaijin Gamejam. В данном проекте я впервые использовал мультипоточность,
                                благодаря чему увеличил производитьтельность
                                игры в 4-5 раза. Занял 20 место в данном событии.
                                Увы код игры остался на старом жестком диске, я его не перенес на SSD.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://entity514-icorp.itch.io/eclion">Страница игры</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.image_wrapper}>
                        <ImageUI url={"eclion2.png"} cover />
                    </div>
                </div>
                <div>Видео игры</div>
                <iframe style={{ marginBottom: "40px" }} width="560" height="315" src="https://www.youtube.com/embed/tTM6pGIrewg?start=9975" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


            </div>
        </div>
    )
}