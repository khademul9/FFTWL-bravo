import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

const AddBank = () => {
  return (
    <Box>
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "30px 0px",
          // gap: 4,
        }}
      >
        <Grid container spacing={2}>
          <Box className="bodyBgColor">
            <Box>
              <Typography
                style={{
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#222222",
                }}
                mb={2}
              >
                Add Bank Account
              </Typography>
            </Box>
            <form>
              <Box className="passengerInput1">
                <Grid container spacing={4}>
                  <Grid item md={4}>
                    <Typography>Account Holder Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your First Name"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Bank Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your Last Name"
                      />
                    </Box>
                  </Grid>
               

                  <Grid item md={4}>
                    <Typography>Account Number</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input required type="text" placeholder="Bangladesh" />
                    </Box>
                  </Grid>
           

                
                  <Grid item md={4}>
                    <Typography>Branch Name</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your Passport Number"
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item md={4}>
                    <Typography>Address</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="email"
                        placeholder="Address"
                      />
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Typography>Routing Number</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="email"
                        placeholder="Routing Number"
                      />
                    </Box>
                  </Grid>
                    <Grid item md={4}>
                    <Typography>Enter Amount</Typography>
                    <Box style={{ marginTop: "5px" }}>
                      <input
                        required
                        type="email"
                        placeholder="Enter Amount"
                      />
                    </Box>
                  </Grid>
          
                </Grid>
                <Grid>
                <Grid item md={4}>
                    <Box style={{ marginTop: "45px" }}>
                      <button
                        style={{
                          width: "95%",
                          backgroundColor: "var(--primary-color)",
                          border: "none",
                          height: "30px",
                          color: "var(--bodyBg-color)",
                        }}
                      >
                        {" "}
                        Add This Bank
                      </button>
                    </Box>
                  </Grid>
                </Grid>
              
              </Box>
            </form>
          </Box>
        </Grid>
      </Box>
    </Container>
  </Box>
  );
};

export default AddBank;
