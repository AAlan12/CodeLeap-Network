import styles from './styles.module.css'
import Buttons from '../../assets/objects/Buttons';

function Input({title, type, placeholder}) {
    return (
        <div className={styles.input_container}>
            <h2>
                {title}
            </h2>
            <input type={type} placeholder={placeholder}/>
            <Buttons text="ENTER"/>
        </div>
    );
}

export default Input;