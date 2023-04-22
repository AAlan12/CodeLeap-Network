import styles from './styles.module.css';
import Titles from '../Titles';
import Buttons from '../Buttons';

function DeleteScreen() {
    return (
        <div className={styles.container_alert_del}>
            <Titles title="Are you sure you want to delete this item?" />
            <div className={styles.container_buttons}>
                <div className={styles.cancel}>
                    <Buttons text="Cancel" />
                </div>
                <div className={styles.delete}>
                    <Buttons text="Delete" />
                </div>
            </div>
        </div>
    );
}

export default DeleteScreen;