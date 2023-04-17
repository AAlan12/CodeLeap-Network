import styles from './styles.module.css'
import Input from '../../components/Input';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <h1>
          Welcome to CodeLeap network!
        </h1>
        <Input title="Please enter your username" type="email" placeholder="John doe" />
      </div>
    </div>

  );
}

export default Login;