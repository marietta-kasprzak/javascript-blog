import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <div className={styles.button}>
      {props.children}
    </div>
  );
};

  export default Button;