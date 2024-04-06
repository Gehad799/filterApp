import MuiSlider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
const Slider = styled(MuiSlider)({
  ".MuiSlider-thumb": {
    color: "#000",
  },
  ".MuiSlider-rail": {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  ".MuiSlider-track": {
    color: "#000",
  },
});

function PriceRange({ value, changePrice }) {
  return (
    <div>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
      />
    </div>
  );
}
export default PriceRange;
