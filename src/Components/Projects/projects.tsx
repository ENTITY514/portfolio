import { ImageUI } from "../../UI/Image/image"
import style from "./projects.module.css"

export const Projects: React.FC = () => {
    return (
        <div className={style.container}>
            <h1 className={style.portfolio}>Портфолио</h1>
            <div className={style.box}>
                <h2 className={style.title}>Проекты на React</h2>
                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>CrossEngine</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Один из моих последних проектов, который находится на стадии активной разработки.
                                Цель данного проекта - создание подобия игрового движка, для создания HTML5 игр на любом
                                устройстве, визуализаций различных процессов. Эти визулизации потом могут быть использованы
                                для обучения детей, как анимация для различных сайтов или непосредственно создания игры.
                                В этом проекте я использую библиотеку PixiJS для быстрой отрисовки элемнтов при помощи WebGL.
                                В будущем буду добавлять библиотку MatterJS для создания физических симуляций.
                                На данный момент я работаю над созданием компилятора и над backend частью(python-django-framework)
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

                <div className={style.project}>
                    <div className={style.sub_box}>
                        <h3 className={style.name}>CalculatorConstructor</h3>
                        <div className={style.description}>
                            <p className={style.text}>
                                Проект на котором я освоил работу мехянизма Drag and Drop элементов.
                                Тут можно собрать калькулятор расставив элементы как вам угодно.
                                После запуска можно произвести простые рассчеты.
                                Тут был мой первый опыт работы с Figma.
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
                                безопаснойстью. Для это я использовал механизм асимметричнного шифрования при помощи двух ключей. Для этого использовал библиотеку @daotl/cryptico.
                                Также я добавил простой текстовый редактор при помощи библиотеки DraftJS.
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
                        <h3 className={style.name}>MusicPlayer</h3>
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
                        <h3 className={style.name}>ToDoList</h3>
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
                                эелектронный формат таблицу звезд 1950 года. В данном проекте я использовал пакет Tesseract OCR для четения
                                текста с изображения и ряд библиотек по работе с pdf и openCV для работы с изображением.
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
                                Мой проект написанный на C#. Я одновременно учил C#, разбирался в ООП и писал игру. Для меня это был самый яркий
                                опыт программирования на тот момент. Написан без движка(Таково было условие gamejam'а) с использованием порта библиотеки SFML.
                                Писал для Gaijin Gamejam. Впервые использовал мультипоточность, благодаря чему увеличил производитьтельность
                                игрв в 4-5 раза. Занял 20 место в данном событии.
                                Увы код игры остался на старом жестком диске, я его не перенес на SSD.
                            </p>
                            <div className={style.links}>
                                <div className={style.link}>
                                    <a href="https://github.com/ENTITY514/todo-react-app-ts-version-2.0">Github</a>
                                </div>
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