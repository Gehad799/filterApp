import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiToggleButton from "@mui/material/ToggleButton";

import { styled } from "@mui/material/styles";

const ToggleButtonGroup = styled(MuiToggleButtonGroup)({
  width: "100%",
  justifyContent: "space-between",
});

const ToggleButton = styled(MuiToggleButton)({
  fontFamily: `'Raleway', sans-serif`,
  fontSize: ".8rem",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "10px",
  "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
    borderRadius: "10px",
  },
  "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
  "&.Mui-selected": {
    borderRadius: "10px",
    background: "#000",
    color: "#fff",
  },
  "&.MuiToggleButton-root": {
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  },
});

function FilterToggle({ options, value, selectToggle }) {
  return (
    <ToggleButtonGroup value={value} onChange={selectToggle} exclusive>
      {options.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
export default FilterToggle;
