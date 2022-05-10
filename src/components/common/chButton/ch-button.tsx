import './ch_button.css'

interface IChButtonProps {
  type: 'success' | 'warning' | 'error' | 'info' | 'primary',
  children?: React.ReactNode,
}

const ChButton = ({type, children}: IChButtonProps) => {
  return (
      <button type="button"  className={type}>{children}</button>
  )
}

export default ChButton