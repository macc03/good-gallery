import styles from './ch_input.module.css'
interface IChInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const chInput = ({ type }: IChInputProps) => {
  return (
      <input className={styles.commonInput} type={type} />
  )
}

export default chInput