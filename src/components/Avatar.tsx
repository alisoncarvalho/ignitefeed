import styles from './Avatar.module.css'

interface AvatarProps{
    hasBorder?:Boolean;
    src: string;
    alt?:string
}

export function Avatar({hasBorder = true , src, alt}:AvatarProps){
    return(
        <img className={hasBorder ? styles.avatar : styles.avatarWithNoBorder} src={src} alt={alt}  />
    )
}