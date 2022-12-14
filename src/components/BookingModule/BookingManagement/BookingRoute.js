import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import BookingAll from "../BookingPage/BookingAll";
import BookingHold from "../BookingPage/BookingHold";
import IssueRequest from "../BookingPage/IssueRequest";
import Ticketed from "../BookingPage/Ticketed";
import IssueRejected from "../BookingPage/IssueRejected";
import "./BookingRoute.css";
import ReissueRequest from "../BookingPage/ReissueRequest";
import Reissued from "../BookingPage/Reissued";
import ReissueRejected from "../BookingPage/ReissueRejected";
import RefundRequest from "../BookingPage/RefundRequest";
import Refund from "../BookingPage/Refund";
import RefundRejected from "../BookingPage/RefundRejected";
import VoidRequest from "../BookingPage/VoidRequest";
import Voided from "../BookingPage/Voided";
import VoidedRejected from "../BookingPage/VoidedRejected";
import BookingFailed from "../BookingPage/BookingFailed";
import BookingCancelled from "../BookingPage/BookingCancelled";
import SearchIcon from "@mui/icons-material/Search";

const BookingRoute = () => {
  const [optionValue, setOptionValue] = useState("");

  const handleChangeOption = (e) => {
    setOptionValue(e.target.value);
  };

  const handleSearch = (e) => {
    // console.log(e);
  };
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
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
              Booking Management
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
                <option value="all">&nbsp;Show All</option>
                <option value="hold">&nbsp;Hold</option>
                <option value="Issue In Processing">&nbsp;Issue Request</option>
                <option value="Ticketed">&nbsp;Ticketed</option>
                <option value="Issue Rejected">&nbsp;Issue Rejected</option>
                <option value="Reissue In Processing">
                  &nbsp;Reissue Request
                </option>
                <option value="Reissued">&nbsp;Reissued</option>
                <option value="Reissue Rejected">&nbsp;Reissue Rejected</option>
                <option value="Refund In Processing">
                  &nbsp;Refund Request
                </option>
                <option value="Refunded">&nbsp;Refunded</option>
                <option value="Refund Rejected">&nbsp;Refund Rejected</option>
                <option value="Void In Processing">&nbsp;Void Request</option>
                <option value="Voided">&nbsp;Voided</option>
                <option value="Void Rejected">&nbsp;Void Rejected</option>
                <option value="Booking Failed">&nbsp;Booking Failed</option>
                <option value="cancelled">&nbsp;Cancelled</option>
              </select>
            </Box>
          </Box>
        </Box>
        {(optionValue === "all" || optionValue === "") && <BookingAll />}
        {optionValue === "hold" && <BookingHold />}
        {optionValue === "Issue In Processing" && <IssueRequest />}
        {optionValue === "Ticketed" && <Ticketed />}
        {optionValue === "Issue Rejected" && <IssueRejected />}
        {optionValue === "Reissue In Processing" && <ReissueRequest />}
        {optionValue === "Reissued" && <Reissued />}
        {optionValue === "Reissue Rejected" && <ReissueRejected />}
        {optionValue === "Refund In Processing" && <RefundRequest />}
        {optionValue === "Refunded" && <Refund />}
        {optionValue === "Refund Rejected" && <RefundRejected />}
        {optionValue === "Void In Processing" && <VoidRequest />}
        {optionValue === "Voided" && <Voided />}
        {optionValue === "Void Rejected" && <VoidedRejected />}
        {optionValue === "Booking Failed" && <BookingFailed />}
        {optionValue === "cancelled" && <BookingCancelled />}
      </Container>
    </Box>
  );
};

export default BookingRoute;
