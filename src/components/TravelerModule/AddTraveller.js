import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const AddTraveller = () => {
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
          <Grid container spacing={1}>
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
                  Add Traveler
                </Typography>
              </Box>
              <form>
                <Box className="passengerInput1">
                  <Grid container spacing={2} columnSpacing={3}>
                    <Grid item md={4}>
                      {/* <Typography>First/Given Name</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="text"
                          placeholder="Your First Name"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Last/Surname</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="text"
                          placeholder="Your Last Name"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Gender</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <select required name="Male" id="Male">
                          <option value="Select  ">Select </option>
                          <option value="Male">Male </option>
                          <option value="Female">Female</option>
                        </select>
                      </Box>
                    </Grid>

                    <Grid item md={4}>
                      {/* <Typography>Nationality</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input required type="text" placeholder="Bangladesh" />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Passenger Type</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <select required name="Adult" id="Adult">
                          <option value="Select">Select </option>
                          <option value="Adult">Adult </option>
                          <option value="Child">Child</option>
                          <option value="Infant">Infant</option>
                        </select>
                      </Box>
                    </Grid>

                    <Grid item md={4}>
                      {/* <Typography>Date of Birth</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="date"
                          placeholder="Find traveler to auto fill"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Passport No</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="text"
                          placeholder="Your Passport Number"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Passport Expire Date</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="date"
                          placeholder="Find traveler to auto fill"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Email</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="email"
                          placeholder="Find traveler to auto fill"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Contact Number</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          type="email"
                          placeholder="Find traveler to auto fill"
                        />
                      </Box>
                    </Grid>
                    <Grid item md={4}>
                      {/* <Typography>Choose Passport Copy</Typography> */}
                      <Box style={{ marginTop: "5px" }}>
                        <input
                          required
                          style={{
                            backgroundColor: "var(--black-color)",
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            padding: "6px 10px",
                            boxSizing: "border-box",
                          }}
                          type="file"
                          placeholder="Find traveler to auto fill"
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      display={{ xs: "none", sm: "none", md: "block" }}
                    ></Grid>

                    <Grid item md={4}>
                      <Box style={{ marginTop: "5px" }}>
                        <button
                          style={{
                            width: "100%",
                            backgroundColor: "var(--primary-color)",
                            border: "none",
                            height: "30px",
                            color: "var(--bodyBg-color)",
                          }}
                        >
                          {" "}
                          Add This Traveler
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

export default AddTraveller;
