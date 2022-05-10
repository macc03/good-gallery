import { useRef } from "react";

interface IChFormProps {
  ref?: string | React.RefObject<HTMLFormElement>;
  rules: Array<Object>;
  children: Array<React.ReactNode>;
}

const ChForm = ({ ref, rules, children }: IChFormProps) => {
  const chForm = useRef<HTMLFormElement>(null);

  const validate = (callback: Function) => {
    callback(children.every((child: any) => child.props.validateStatus !== false));
  }

  return (
    <div>
      <form ref={chForm} onSubmit={() => false}>
        {children}
      </form>
    </div>
  )
}

export default ChForm