import styles from './styles.module.css';

function Buttons({ text }) {
  return (   
        <button className={styles.btn}>
            {text}
        </button>
  );
}

export default Buttons;