import styles from './styles.module.scss';

export function SubscribeButton() {
    const isUserLoggedIn = true;

    return (
        <button 
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}
