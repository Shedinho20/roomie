import { useSelector } from "react-redux";
import { Istate } from "./store";
import "./styles/App.scss";

function App() {
  const { theme } = useSelector((state: Istate) => state);

  return <div className={`App ${theme.theme}`}>Roomie</div>;
}

export default App;
