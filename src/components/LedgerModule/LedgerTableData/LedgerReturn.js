import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#405687",
      darker: "#405687",
    },
  },
});

const LedgerReturn = () => {
  return (
    <Box>
      <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>Sl No</th>
            <th>Ledger Type</th>
            <th>Transaction ID</th>
            <th>Transaction Dtae</th>
            <th>Transaction Dteails</th>
            <th>Transaction Amount</th>
            <th>Last Balance</th>
          </tr>
          <tbody>
            <tr>
              <td>01</td>
              <td>Purchase</td>
              <td>51151515355</td>
              <td>27 Nov 2022 11:53 AM</td>
              <td>oneway Air Ticket DAC - DXB - Oman Air By Agent</td>
              <td>12556</td>
              <td>44544</td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Box
        sx={{
          width: "100%",
          my: 3,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          borderTop: "1px solid #282E2C",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            my: 3,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",

            marginTop: "8px",
          }}
        >
          <Typography style={{ fontSize: "15px", color: "#282E2C" }}>
            Showing Results 1 - 10 of 20
          </Typography>
          <ThemeProvider theme={theme}>
            <Stack spacing={2}>
              <Pagination
                size="small"
                //   count={pageCount}
                // onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default LedgerReturn;
