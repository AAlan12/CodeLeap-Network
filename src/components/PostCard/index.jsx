import styles from './styles.module.css';
import Titles from '../Titles';
import IcoDel from '../../assets/ic-delete.svg'
import IcoEdit from '../../assets/ic-edit.svg'

function PostCard({ title, username, content }) {
  return (
    <div className={styles.container_header}>
      <Titles title={title} />
      <div className={styles.container_icons}>
        <img src={IcoDel} alt="" />
        <img src={IcoEdit} alt="" />
      </div>

    </div>
  );
}

export default PostCard;