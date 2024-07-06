import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { tableData } from "./scoreboard/Data/data";

export default function ScoreKeeping() {
  const firstError = useRouteError();

  return (
    <div >
      <h1>Score Keeping Page</h1>
      {/* Form */}
      <div className="row mt-5">
        {/* Event Dropdown */}
        <FormControl>
          <InputLabel id="demo-simple-select-label">Event</InputLabel>
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="Age"
            onChange={handleChange}
          >
            {tableData.map((tableRow) => (
              <MenuItem value={tableRow.events}>{tableRow.events}</MenuItem>
            ))}
          </Select> */}
          <FormHelperText>Choose Event to update</FormHelperText>
        </FormControl>
      </div>
      {/* First Place Dropdown */}
      <div className="row mt-5">
        <FormControl>
          <InputLabel id="demo-simple-select-label">First Place</InputLabel>
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //   value={age}
            label="firstPlace"
            onChange={handleChangePlace}
          >
            {initialColumnOrder.slice(1).map((column) => (
              <MenuItem value={column}>{column}</MenuItem>
            ))}
          </Select> */}
          <FormHelperText>Choose First Place Team Of Event</FormHelperText>
        </FormControl>

        {/* Send Button */}
        <div className="row mt-5">
          {/* <Button
            variant="contained"
            onClick={() => updateData(5, teamText, eventText)}
          >
            Send
          </Button> */}
          <Button>
          <Link to={`login`}>Your Name</Link>
            </Button>
        </div>
      </div>

    </div>
  );
}