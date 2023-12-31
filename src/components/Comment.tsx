import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react/'

interface CommentProps{
    content:string;
    onDeleteComment: (comment:string)=> void

}

export function Comment({content , onDeleteComment}:CommentProps){

    const [ likeCount , setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }



    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/57332512?v=4"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Gabriel Lennon</strong>
                            
                            <time title='16 de junho de 2023' dateTime='2023-07-26 21:56 '> Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24}/>
                        Aplaudir  <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            
        </div>
    )
}