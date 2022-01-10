import "./button.scss";

interface Props {
  width: string;
  children: React.ReactNode;
  bckColor: string;
  border?: string;
}

export const Button: React.FC<Props> = ({ width, children, bckColor, border }) => {
  const style = {
    width: `${width}`,
    backgroundColor: `${bckColor}`,
    border: `${border ? `2px solid ${border}` : "none"}`,
  };

  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};
