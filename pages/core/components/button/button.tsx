import styles from './button.module.scss';

interface ButtonProps {
    className?:string
    children:any
}
const Button = ({ children, className }: ButtonProps) =>{

    return (
        <button className={className? className : styles.button}>
         {children}
        </button>
    )
}

export default Button;