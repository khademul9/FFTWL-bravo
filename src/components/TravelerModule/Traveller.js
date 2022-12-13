import React from "react";
import { Box, Button, Container, Input } from "@mui/material";
import { Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import "./Traveler.css";

const Traveller = () => {
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box
          sx={{
            margin: "30px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="span"
              sx={{
                fontWeight: 500,
                fontSize: "24px",
                margin: "30px 0px",
                color: "#222222",
                fontFamily: "poppins",
              }}
            >
              Travelers
            </Typography>
            <Typography
              variant="span"
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFA84D",
                fontFamily: "poppins",
              }}
            >
              You can find your all travelers here
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Button
              sx={{
                width: "150px",
                fontSize: "14px",
                textTransform: "capitalize",
                height: "36px",
                background: "var(--black-color)",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "var(--black-color)",
                },
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/addtraveller"}
              >
                Add Travelers
              </Link>
            </Button>
          </Box>
        </Box>
        <Box className="balance-transaction" marginTop={"20px"}>
          <table>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Type</th>
              <th>DOB</th>
              <th>Nationality</th>
              <th>Passport No</th>
              <th>Passport Expire Date</th>
              <th>Passport Copy</th>
              <th>Emali</th>
              <th>Phone </th>
            </tr>

            <tbody>
              <tr>
                <td>01</td>
                <td>Sayed Afridi</td>
                <td>Male </td>
                <td>RoundWay</td>
                <td>12 Oct 2022</td>
                <td>Bangladesh</td>
                <td>BD515151</td>
                <td>12 Oct 2022</td>
                <td>View</td>
                <td>syedafridi0@gmail.com</td>
                <td>1551555151</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Sayed Afridi</td>
                <td>Male </td>
                <td>RoundWay</td>
                <td>12 Oct 2022</td>
                <td>Bangladesh</td>
                <td>BD515151</td>
                <td>12 Oct 2022</td>
                <td>View</td>
                <td>syedafridi0@gmail.com</td>
                <td>1551555151</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Container>
    </Box>
  );
};

export default Traveller;
