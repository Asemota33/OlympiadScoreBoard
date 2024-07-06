import { useMemo, useState } from "react";
import "./scoreboard.component.css";
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { tableData } from "./Data/data";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { Game } from "./Interfaces/Games.interface";
import { FooterValue } from "./Interfaces/FooterValues.interface";
import { Link, NavLink } from "react-router-dom";

const initialColumnOrder = [
  "events",
  "blue",
  "green",
  "yellow",
  "pink",
  "red",
  "grey",
  "orange",
];

const emptyRowDefault: Game = {
  events: "",
  blue: 0,
  green: 0,
  yellow: 0,
  pink: 0,
  red: 0,
  grey: 0,
  orange: 0,
};

const footerValues: FooterValue = {
  blue: 0,
  green: 0,
  yellow: 0,
  pink: 0,
  red: 0,
  grey: 0,
  orange: 0,
};

const Scoreboard = () => {
  // Setters
  const [eventText, setEventText] = useState("");
  const [teamText, setTeamText] = useState("");
  const [tableDataArray, setTableData] = useState(tableData);
  const [columnOrder, setColumnOrder] = useState(initialColumnOrder);
  const [allScores, setallScores] = useState<FooterValue>(footerValues);

  //Data

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      { accessorKey: "events", header: "Events" },
      {
        accessorKey: "blue",
        header: "Blue",
        Footer: () => <div>Total Points: {allScores?.blue}</div>,
      },
      {
        accessorKey: "green",
        header: "Green",
        Footer: () => <div>Total Points: {allScores?.green}</div>,
      },
      {
        accessorKey: "yellow",
        header: "Yellow",
        Footer: () => <div>Total Points: {allScores?.yellow}</div>,
      },
      {
        accessorKey: "pink",
        header: "Pink",
        Footer: () => <div>Total Points: {allScores?.pink}</div>,
      },
      {
        accessorKey: "red",
        header: "Red",
        Footer: () => <div>Total Points: {allScores?.red}</div>,
      },
      {
        accessorKey: "grey",
        header: "Grey",
        Footer: () => <div>Total Points: {allScores?.grey}</div>,
      },
      {
        accessorKey: "orange",
        header: "Orange",
        Footer: () => <div>Total Points: {allScores?.orange}</div>,
      },
    ],
    [allScores]
  );

  const table = useMaterialReactTable({
    data: tableDataArray,
    columns,
    initialState: {
      columnOrder: columnOrder,
    },
    state: {
      columnOrder: columnOrder,
    },
    enablePagination: false,
  });

  //Functions

  const handleChange = (event: SelectChangeEvent) => {
    setEventText(event.target.value as string);
  };

  const handleChangePlace = (event: SelectChangeEvent) => {
    setTeamText(event.target.value as string);
  };

  const updateData = (place: number, team: string, event: string) => {
    const itemIndex = tableDataArray.findIndex((item) => item.events === event);

    if (itemIndex !== -1) {
      const newtableData = [...tableDataArray];
      let targetedRowInTable = newtableData[itemIndex];
      targetedRowInTable = clearDataInRow(targetedRowInTable);
      targetedRowInTable[team] = place;

      newtableData[itemIndex] = {
        ...targetedRowInTable,
      };

      setTableData(newtableData);
      setAllTotals(newtableData);
    }
    updateColumnOrder();
  };

  const setAllTotals = (tableData: Game[]) => {
    initialColumnOrder.slice(1).forEach((val) => {
      const totalPoints = tableData.reduce((acc, row) => acc + row[val], 0);
      allScores[val] = totalPoints;
    });
    setallScores(allScores);
  };

  const clearDataInRow = (row: Game) => {
    const events = row.events;
    const value: Game = {
      ...emptyRowDefault,
      events,
    };
    return value;
  };

  const updateColumnOrder = () => {
    const entries = Object.entries(allScores);
    let newEntriesArray = entries.sort(([, valA], [, valB]) => valA - valB);
    newEntriesArray.reverse();
    const colorsArray = newEntriesArray.map((obj) => obj[0]);
    colorsArray.unshift("events");
    console.log(entries);
    console.log(colorsArray);
    setColumnOrder(colorsArray);
  };

  return (
    <div className="container-fluid">
      {/* Scoreboard table */}
      <div className="row mb-10">
        <div className="scoreboard">
          <MaterialReactTable
            table={table}
            //   onColumnOrderChange={setTableData}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Scoreboard;
