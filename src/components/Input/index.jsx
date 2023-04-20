import styles from './styles.module.css';

function Input({title, type, placeholder}) {
    return (
        <div className={styles.input_container}>
            <h2>
                {title}
            </h2>
            <input type={type} placeholder={placeholder}/>           
        </div>
    );
}

export default Input;