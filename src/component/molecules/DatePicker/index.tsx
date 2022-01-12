import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Calender } from "../Calender";

interface calProps {
  calender: boolean;
  checkout: boolean;
  check: any;
  onChange: (newValue: any) => void;
  handleCheck: () => void;
  handleClickAway: () => void;
  minDate: any;
}
export const Datepicker = ({
  calender,
  check,
  onChange,
  handleCheck,
  checkout,
  minDate,
  handleClickAway,
}: calProps) => {
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            //@ts-ignore
            cancelText=""
            minDate={minDate}
            showToolbar={false}
            PopperProps={{
              placement: "bottom-start",
            }}
            open={calender}
            label="Custom input"
            value={check}
            onChange={onChange}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <>
                <input ref={inputRef} {...inputProps} className="inputDemo" />

                <Calender handleCheck={handleCheck} name={check} {...inputProps} checkout={checkout} />
              </>
            )}
          />
        </LocalizationProvider>
      </div>
    </ClickAwayListener>
  );
};
