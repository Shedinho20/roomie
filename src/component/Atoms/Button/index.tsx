import "./button.scss";

interface Props {
  width: string;
  label: string;
  bckColor: string;
}

export const Button: React.FC<Props> = ({ width, label, bckColor }) => {
  const style = {
    width: `${width}`,
    backgroundColor: `${bckColor}`,
  };
  return (
    <button className="button" style={style}>
      {label}
    </button>
  );
};
