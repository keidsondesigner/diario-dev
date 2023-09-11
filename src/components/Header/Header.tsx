import styles from './Header.module.css';

import igniteLogo from '../../assets/imgs/ignite-logo.svg'

export function Header(props: { title: string }) {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo ignite" />
            <h2>
                <strong >{props.title}</strong>
            </h2>
        </header>
    );
}