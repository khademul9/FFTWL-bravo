import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";

const BankAccount = () => {
    const handleSearch = (e) => {
        console.log(e);
      };
    
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
              Bank Account
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
          <Box>
              <div class="search-box">
                <input
                  class="search-text"
                  type="text"
                  placeholder="Search....."
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Button class="search-btn">
                  <SearchIcon />
                </Button>
              </div>
            </Box>
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
                to={"/addBank"}
              >
                Add Bank
              </Link>
            </Button>
          </Box>
        </Box>

        <Box className="balance-transaction" marginTop={"20px"}>
          <table>
            <tr>
              <th>Holder Name</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Swift</th>
              <th>Routing</th>
              <th>Action</th>
            </tr>

            <tbody>
              <tr>
                <td>Syed Afridi</td>
                <td>Dutch Bangla Bank </td>
                <td>51151515355</td>
                <td>Samoly Branch</td>
                <td>Basundhara, Dhaka</td>
                <td>12556</td>
                <td>44544</td>

                <td>
                  {" "}
                  <DeleteOutlineIcon sx={{color:'#2564B8'}} />{" "}
                </td>
              </tr>
              <tr>
                <td>Syed Afridi</td>
                <td>Dutch Bangla Bank </td>
                <td>51151515355</td>
                <td>Samoly Branch</td>
                <td>Basundhara, Dhaka</td>
                <td>12556</td>
                <td>44544</td>

                <td>
                  {" "}
                  <DeleteOutlineIcon sx={{color:'#2564B8'}} />{" "}
                </td>
              </tr>
              <tr>
                <td>Syed Afridi</td>
                <td>Dutch Bangla Bank </td>
                <td>51151515355</td>
                <td>Samoly Branch</td>
                <td>Basundhara, Dhaka</td>
                <td>12556</td>
                <td>44544</td>

                <td>
                  {" "}
                  <DeleteOutlineIcon sx={{color:'#2564B8'}} />{" "}
                </td>
              </tr>
              <tr>
                <td>Syed Afridi</td>
                <td>Dutch Bangla Bank </td>
                <td>51151515355</td>
                <td>Samoly Branch</td>
                <td>Basundhara, Dhaka</td>
                <td>12556</td>
                <td>44544</td>

                <td>
                  {" "}
                  <DeleteOutlineIcon sx={{color:'#2564B8'}} />{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Container>
    </Box>
  );
};

export default BankAccount;
