import styles from './TextInput.module.scss';

const TextInput = () => {
    return (<input className={styles.input} type="text" placeholder="Search..."/>);
};

export default TextInput;