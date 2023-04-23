import styles from './styles.module.css';
import Input from '../../components/Input';
import Titles from '../../components/Titles';
import Buttons from '../../components/Buttons';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <Titles title="Welcome to CodeLeap network!"/>
        <Input title="Please enter your username" type="email" placeholder="John doe" />
        <Link to="/main">
          <Buttons text="ENTER"/>
        </Link>
      </div>
    </div>
  );
}

export default Login;