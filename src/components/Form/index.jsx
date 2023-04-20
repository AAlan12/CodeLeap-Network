import styles from './styles.module.css';
import Titles from '../../components/Titles';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';

function Form() {
    return (
        <div className={styles.container_form}>
            <Titles title="Whats on your mind?" />
            <Input title="Title" type="text" placeholder="Hello world" />
            <div className={styles.content}>
                <Input title="Content" type="text" placeholder="Content here" />
            </div>
            <Buttons text="Create" />
        </div>
    );
}

export default Form;