import styles from './styles.module.css';
import Titles from '../Titles';
import IcoDel from '../../assets/ic-delete.svg'
import IcoEdit from '../../assets/ic-edit.svg'

function PostCard({ title, username, time, content }) {
  return (
    <>
      <div className={styles.container_header}>
        <Titles title={title} />
        <div className={styles.container_icons}>
          <img src={IcoDel} alt="" />
          <img src={IcoEdit} alt="" />
        </div>
      </div>
      <div className={styles.container_content}>
        <div className={styles.container_row}>
          <h4>@{username}</h4>
          <h3>{time} minutes ago</h3>
        </div>
        <p>{content}</p>
      </div>
    </>
  );
}

export default PostCard;