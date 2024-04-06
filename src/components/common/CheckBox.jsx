import MuiCheckbox from "@mui/material/Checkbox";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

import { styled } from "@mui/material/styles";

const FormControlLabel = styled(MuiFormControlLabel)({
  ".MuiFormControlLabel-label ": {
    fontSize: "0.8rem",
    fontFamily: `'Raleway', sans-serif`,
  },
  "&.MuiFormControlLabel-root": {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
});
const Checkbox = styled(MuiCheckbox)({
  "&.Mui-checked": {
    color: "#000",
  },
});

function CheckBox({ cuisine, changeChecked }) {
  const { checked, label, id } = cuisine;
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          checked={checked}
          onChange={() => changeChecked(id)}
        />
      }
      label={label}
    />
  );
}
export default CheckBox;
