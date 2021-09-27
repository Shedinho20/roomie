import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Navbar } from "./component/Compounds";
import { ThemeToggler } from "./component/molecules";
import { actionCreators, Istate } from "./store";
import "./styles/App.scss";

function App() {
  const dispatch = useDispatch();
  const { setTheme } = bindActionCreators(actionCreators, dispatch);

  const { theme } = useSelector((state: Istate) => state);

  useEffect(() => {
    dispatch(setTheme);
  }, []);

  return (
    <div className={`App ${theme.theme}`}>
      <Navbar />
      <ThemeToggler />
    </div>
  );
}

export default App;
