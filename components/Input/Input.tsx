import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles['input-label']}>{label}</label>
            <input className={styles['input-field']} {...rest} />
        </div>
    );
};

export default Input;
