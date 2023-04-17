import styles from './styles.module.css'

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
          <h2>
            What’s on your mind?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;