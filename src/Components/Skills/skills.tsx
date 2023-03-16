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
                    <Skill url="/js.png" title="Javascript" />
                    <Skill url="/python.png" title="Python" />
                </div>
                <h2 className={style.name}>Вторичные</h2>
                <div className={style.skills}>
                    <Skill url="/c-sharp.png" title="C#" />
                    <Skill url="/git.png" title="git" />
                    <Skill url="/MagicaVoxelIcon.webp" title="Magicavoxel" />
                </div>
                <div className={style.libraries}>
                    <h3 className={style.title}>NPM библиотеки, с которые я использовал:</h3>
                    <div className={style.lib_box}>
                        <ul>
                            <li className={style.lib}>Redux,Redux-Toolkit</li>
                            <li className={style.lib}>React-router-dom</li>
                            <li className={style.lib}>React-transition-group</li>
                            <li className={style.lib}>CodeMirror</li>
                            <li className={style.lib}>DraftJS</li>
                            <li className={style.lib}>PixiJS</li>
                            <li className={style.lib}>MatterJS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}