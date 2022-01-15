import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceID: string;
}

export function SubscribeButton({ priceID }: SubscribeButtonProps) {
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
