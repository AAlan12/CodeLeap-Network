import styles from './styles.module.css'

function Login() {
  return (
    <div className={styles.container_title}>
      <h1>
        Welcome to CodeLeap network!
      </h1>
      <h2>
        Please enter your username
      </h2>
    </div>
  );
}

export default Login;