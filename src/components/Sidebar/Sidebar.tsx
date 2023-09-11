import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=50" />

            <div className={styles.profile}>
                <Avatar
                    hasBorder={true}
                    src='https://github.com/keidsondesigner.png'
                    alt='image keidson'
                />
                <strong>Keidson Roby Siqueira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}