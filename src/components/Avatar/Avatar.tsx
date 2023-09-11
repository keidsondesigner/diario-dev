import { IAvatar } from "../../core/interfaces/avatar.interface";
import styles from "./Avatar.module.css";

export function Avatar(props: IAvatar) {
    return(
        <img 
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={props.src} alt={props.alt} 
        />
    )
}