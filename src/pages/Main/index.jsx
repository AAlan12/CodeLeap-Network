import styles from './styles.module.css';
import Titles from '../../components/Titles';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <h1>
          CodeLeap Network
        </h1>
      </div>
      <div className={styles.container_block}>
        <div className={styles.container_form}>
          <Titles title="Whats on your mind?" />
        </div>
      </div>
    </div>
  );
}

export default Main;