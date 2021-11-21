import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Calender } from "../Calender";

interface calProps {
  calender: boolean;
  checkout: boolean;
  check: any;
  onChange: (newValue: any) => void;
  handleCheck: () => void;
}
export const Datepicker = ({ calender, check, onChange, handleCheck, checkout }: calProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        //@ts-ignore
        cancelText=""
        minDate={new Date()}
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
  );
};
