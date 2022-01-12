import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Spinner } from "./component/Atoms";
import { MobileMenu, Navbar } from "./component/Compounds";
import { ThemeToggler } from "./component/molecules";
import { MainRoutes } from "./routes/MainRoutes";
import { actionCreators, Istate } from "./store";
import "./styles/App.scss";

function App() {
  const dispatch = useDispatch();
  const { setTheme, isAuthed } = bindActionCreators(actionCreators, dispatch);

  const { theme, auth } = useSelector((state: Istate) => state);

  useEffect(() => {
    dispatch(setTheme);
    dispatch(isAuthed);
  }, []);

  return (
    <>
      {auth.isAuth ? (
        <div className={`App ${theme.theme}`}>
          <Navbar />
          <MobileMenu />
          <ThemeToggler />
          <MainRoutes />
        </div>
      ) : (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default App;
