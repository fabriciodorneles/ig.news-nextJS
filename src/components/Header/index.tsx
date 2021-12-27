import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {/* <img src="/images/logo.svg" alt="ig.news" /> */}
                <nav>
                    <a href="" className={styles.active}>COMO</a>
                    <a href="">O PRÓXIMO PASSO</a>
                    <a href="">QUEM</a>
                </nav>
            </div>
        </header>
    );
}
