import styles from './styles.module.css';
import Input from '../../components/Input';
import Titles from '../../components/Titles';
import Buttons from '../../components/Buttons';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <Titles title="Welcome to CodeLeap network!"/>
        <Input title="Please enter your username" type="email" placeholder="John doe" />
        <Buttons text="ENTER"/>
      </div>
    </div>
  );
}

export default Login;