import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(punchPower, punchSpeed, reflexTime, totalPunches, blockedPunches, accuracy) {
  return { punchPower, punchSpeed, reflexTime, totalPunches, blockedPunches, accuracy };
}

const rows = [
  createData(243, 32.68, 189, 193, 4, 17, 7, 58.82
  ),
  createData(807, 26.76, 126, 179, 53, 19, 9, 52.63)
  , createData(326, 46.77, 111, 196, 85, 20, 10, 50)
  , createData(360, 27.22, 154, 330, 176, 20, 13, 35)
  , createData(848, 45.52, 95, 353, 258, 10, 6, 40)
  , createData(252, 35.13, 159, 291, 132, 14, 11, 21.43)
  , createData(571, 37.28, 157, 489, 332, 12, 7, 41.67)
  , createData(738, 31.48, 79, 247, 168, 11, 2, 81.82)
  , createData(263, 39.83, 101, 100, 1, 17, 16, 5.88)
  , createData(320, 31.59, 167, 216, 49, 14, 12, 14.29)

];


const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Punches</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell >Punch Power (N)</TableCell>
              <TableCell align="left">Punch Speed (km/h)
              </TableCell>
              <TableCell align="left">Reflex Time (ms)
              </TableCell>
              <TableCell align="left">Total Punches
              </TableCell>
              <TableCell align="left">Blocked Punches
              </TableCell>
              <TableCell align="left">Accuracy (%)

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.punchPower}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.punchSpeed}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.reflexTime}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.totalPunches}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.blockedPunches}
                </TableCell>
                <TableCell component="th" scope="row">
                  {(100 - (((row.blockedPunches * 100) / row.totalPunches))).toFixed(2)}
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
