import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

import {PencilLine} from 'phosphor-react/'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://racingonline.com.br/wp-content/uploads/2023/05/20230506_F1_Miami_SergioPerez_02_GettyImages.jpg" />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/alisoncarvalho.png"/>
                {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/107581260?v=4" alt="foto de perfil" /> */}
                <strong>Alison Carvalho</strong>
                <span>future Web Developer</span>

            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                     Editar seu perfil 
                </a>
            </footer>
        </aside>
    )
}