type ButtonProps = {
  cssClass: string;
  text: string;
  handleClick?: () => void;
  icon?: string;
};

const Button = ({ cssClass, text, handleClick, icon }: ButtonProps) => {
  return (
    <div className={cssClass} onClick={handleClick}>
      {icon}
      <div>{text}</div>
    </div>
  );
};

export default Button;
