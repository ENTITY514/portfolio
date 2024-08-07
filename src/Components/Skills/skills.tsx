import { ImageUI } from "../../UI/Image/image"
import { Skill } from "./skill/skill"
import style from "./skills.module.css"

export const Skills: React.FC = () => {
    return (
        <div className={style.container}>
            <h1>Skills</h1>
            <div className={style.box}>
                <h2 className={style.name}>Основные</h2>
                <div className={style.skills}>
                    <Skill url="/logo512.png" title="React" />
                    <Skill url="/typescript.png" title="Typescript" />
                    <Skill url="/python.png" title="Python" />
                    <Skill url="/next.png" title="Next" />
                    <Skill url="/django.png" title="Django" />
                </div>
                <h2 className={style.name}>Вторичные</h2>
                <div className={style.skills}>
                    <Skill url="/c-sharp.png" title="C#" />
                    <Skill url="/git.png" title="git" />
                    <Skill url="/MagicaVoxelIcon.webp" title="Magicavoxel" />
                </div>
            </div>
        </div>
    )
}