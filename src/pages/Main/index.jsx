import styles from './styles.module.css';
import Titles from '../../components/Titles';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <Titles title="CodeLeap Network" />
       
      </div>
      <div className={styles.container_block}>
        <div className={styles.container_form}>
          <Titles title="Whats on your mind?" />
          <Input title="Title" type="text" placeholder="Hello world" />
          <div className={styles.content}>
            <Input title="Content" type="text" placeholder="Content here" />
          </div>
          <Buttons text="Create"/>
        </div>
      </div>
    </div>
  );
}

export default Main;