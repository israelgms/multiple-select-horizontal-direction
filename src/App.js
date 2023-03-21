import "./styles.css";

import * as React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormControl
} from "@mui/material";

const MenuProps = {
  PaperProps: {
    sx: {
      "& .MuiList-root": {
        maxWidth: "300px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "3px",
        "& .MuiButtonBase-root": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          fontSize: "14px",
          color: "#8599B8"
        },
        "& .Mui-selected": { backgroundColor: "#5170FF", color: "#FFF" }
      }
    }
  }
};

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  28,
  29,
  30
];

function MultipleSelect() {
  const [number, setNumber] = React.useState([]);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Dias de vencimento</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={number}
        onChange={handleChange}
        input={<OutlinedInput label="Dias de vencimento" />}
        MenuProps={MenuProps}
      >
        {numbers.map((number) => (
          <MenuItem key={number} value={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Multiple Select Horizontal Direction</h1>
      <MultipleSelect />
    </div>
  );
}
