import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

import { Avatar } from '../Avatar/Avatar';

export function Comment(props: any) {
    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src='https://github.com/keidsondesigner.png' alt='texto alt' />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Diego Fernandes</strong>
                                <time>Cerca de 2h atrás</time>
                            </div>
                            <button title='Deletar comentário'><Trash size={24} /> </button>
                        </header>
                        <p>{props.content}</p>
                    </div>
                    <footer>
                        <button>
                            <ThumbsUp />
                            aplaudir <span>23</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}