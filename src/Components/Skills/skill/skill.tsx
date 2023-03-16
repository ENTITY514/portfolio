import { ImageUI } from "../../../UI/Image/image"
import style from "./skill.module.css"

interface SkillProps {
    url: string
    title: string
}

export const Skill: React.FC<SkillProps> = ({ url, title }) => {
    return (
        <div className={style.container}>
            <div className={style.image_wrapper}>
                <ImageUI url={url} />
            </div>
            <h3 className={style.skill_name}>{title}</h3>
        </div>
    )
}