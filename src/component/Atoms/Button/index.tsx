import "./button.scss";

interface Props {
  width: string;
  children: React.ReactNode;
  bckColor?: string;
  border?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({ width, children, bckColor, border, onClick, disabled }) => {
  const style = {
    width: `${width}`,
    backgroundColor: `${bckColor}`,
    border: `${border ? `2px solid ${border}` : "none"}`,
  };

  return (
    <button className={disabled ? "button loading" : "button"} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
