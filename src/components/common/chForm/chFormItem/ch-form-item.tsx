import { useState } from 'react';
import styles from './ch_form_item.module.css'
interface IChFormItemProps {
  label: string;
  prop: string;
  children?: React.ReactNode;
}

const ChFormItem = (props: IChFormItemProps) => {
  const [validateStatus, setValidateState] = useState(false)
  const [validatemessage, setValidatemessage] = useState('')

  return (
    <div className='relative'>
      <label>{props.label}</label>
      {props.children}

      {
        !validateStatus ? (
          <span className={styles.tips}>{validatemessage} </span>
        ) : null}
    </div>
  )
}

export default ChFormItem