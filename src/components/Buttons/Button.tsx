import {FC, ReactNode} from 'react'

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  type: "button" | "submit" | "reset";
  handleClick: (e: any) => void;
}

const Button: FC<Props> = ({
  children,
  id,
  className,
  type,
  handleClick,
  // isDisabled = false
}) => {
  return (
    <button
      id={id}
      className={`button ${className}`}
      type={type}
      onClick={handleClick}
      // disabled={isDisabled && 'disabled'}
    >
      {children}
    </button>
  );
}

export default Button;
