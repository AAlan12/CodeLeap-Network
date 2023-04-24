import styles from './styles.module.css';
import Titles from '../../components/Titles';
import Form from '../../components/Form';
import PostCard from '../../components/PostCard';
import DeleteScreen from '../../components/DeleteScreen';
import EditScreen from '../../components/EditScreen';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <Titles title="CodeLeap Network" />
        <Link to="/">
          <BsBoxArrowLeft />
        </Link>
      </div>
      <div className={styles.container_block}>
        <Form title="Whats on your mind" btn="Create" />
        <div className={styles.container_post}>
          <PostCard
            title="My First Post at CodeLeap Network!"
            username="Sir Alonne"
            time={25}
            content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                  Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat." />
        </div>
      </div>
      <DeleteScreen />
      <EditScreen />
    </div>
  );
}

export default Main;