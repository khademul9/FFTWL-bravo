import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import GeneralLedgerAll from "./GeneralLedgerAll";
import LedgerPurchase from "./LedgerPurchase";
import LedgerReturn from "./LedgerReturn";
import LegderDeposit from "./LegderDeposit";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./GeneralLedger.css";

const GeneralLedgerRoute = () => {
  const [optionValue, setOptionValue] = useState("");
  const handleChangeOption = (e) => {
    setOptionValue(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(e);
  };

  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        {/* <Grid container justifyContent={"space-between"} alignItems={"center"}>
         
          <Grid item xs={6} sm={6} md={6}>
            <Typography
              sx={{ color: "var(--black-color)", fontSize: "23px" }}
              mb={2}
            >
              General Ledger Report
            </Typography>
    
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            textAlign="right"
            className="searchList1-select"
          >

            

            <select onChange={handleChangeOption}>
              <option value="all">&nbsp;All</option>
              <option value="Deposit">&nbsp;Deposit</option>
              <option value="Return">&nbsp;Return</option>
              <option value="Purchase">&nbsp;Purchase</option>
            </select>


          </Grid>

        </Grid> */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "23px",
                color: "var(--black-color)",
              }}
            >
              General Ledger Report
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "var(--primary-color)",
              }}
            >
              21 Nov 2021 - 28 Nov 2022
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
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
            <Box className="searchList1-select">
              <select onChange={handleChangeOption}>
                <option value="all">&nbsp;All</option>
                <option value="Deposit">&nbsp;Deposit</option>
                <option value="Return">&nbsp;Return</option>
                <option value="Purchase">&nbsp;Purchase</option>
              </select>
            </Box>
            <Button
              sx={{
                width: "140px",
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
              <Link style={{ textDecoration: "none", color: "#fff" }} to={"/"}>
                Download PDF
              </Link>
            </Button>
          </Box>
        </Box>

        {(optionValue === "all" || optionValue === "") && <GeneralLedgerAll />}
        {optionValue === "Deposit" && <LegderDeposit />}
        {optionValue === "Return" && <LedgerReturn />}
        {optionValue === "Purchase" && <LedgerPurchase />}
      </Container>
    </Box>
  );
};

export default GeneralLedgerRoute;
