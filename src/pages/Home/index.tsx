import { Search } from "../../component/Compounds";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeText">
        <h3>Find deals on hotels, homes, and much more...</h3>
        <h4>From cozy country homes to funky city apartments</h4>
      </div>
      <Search />
    </div>
  );
};
