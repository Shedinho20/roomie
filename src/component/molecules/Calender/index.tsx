import "./Calender.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import moment from "moment";

interface Props {
  handleCheck: (e: any) => void;
  name: any;
  checkout?: boolean;
}
export const Calender: React.FC<Props> = ({ handleCheck, name, checkout }) => {
  return (
    <div>
      <div className="calender">
        <div className="dateRange">
          <div className="checkIn">
            <CalendarTodayIcon />
            <h4>
              {checkout
                ? name === null
                  ? "Check Out"
                  : moment(name).format("ddd, MMM Do")
                : name === null
                ? "Check In"
                : moment(name).format("ddd, MMM Do")}
            </h4>
          </div>
        </div>

        <div className="clickedCal" onClick={handleCheck}></div>
      </div>
    </div>
  );
};
