import styles from './styles.module.css';
import Form from '../Form';

function EditScreen() {
  return (
    <div className={styles.container_edit}>
      <Form title="Edit item" btn="Save" />
    </div>

  );
}

export default EditScreen;