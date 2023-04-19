import styles from './styles.module.css';

function Titles({ title }) {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
    );
}

export default Titles;