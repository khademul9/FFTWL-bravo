import React from "react";
import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
const GeneralLedgerReport = () => {
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box>
          <Typography
            style={{
              fontWeight: "700px",
              fontSize: "24px",
              color: "var(--black-color)",
            }}
            mb={2}
          >
            General Ledger Report
          </Typography>
        </Box>

        <form>
          <Box className="passengerInput1">
            <Grid container spacing={4}>
              <Grid item md={4}>
                <Typography>Start Date</Typography>
                <Box style={{ marginTop: "5px" }}>
                  <input
                    style={{ backgroundColor: "transparent" }}
                    type="date"
                    placeholder="Find traveler to auto fill"
                  />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Typography>End Date</Typography>
                <Box style={{ marginTop: "5px" }}>
                  <input
                    style={{ backgroundColor: "transparent" }}
                    type="date"
                    placeholder="Find traveler to auto fill"
                  />
                </Box>
              </Grid>
              <Grid
                item
                md={2}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <Button
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    borderRadius: "2px",
                    background: "var(--black-color)",
                    color: "#FFFFFF",
                    width: "100%",
                    height: "33px",
                    "&:hover": {
                      backgroundColor: "var(--black-color)",
                    },
                  }}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default GeneralLedgerReport;
