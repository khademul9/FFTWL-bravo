import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

const AddBank = () => {
  return (
    <Box>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
        <Box>
            <Typography  variant="span"
              sx={{
                fontWeight: 500,
                fontSize: "24px",
                margin: "30px 0px",
                color: "#222222",
                fontFamily: "poppins",
              }}> Add Bank Account</Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <input type="text" placeholder="Account Holder Name" />
          </Grid>
          <Grid item xs={4}>
            <input type="text" placeholder="Account Holder Name" />
          </Grid>
          <Grid item xs={4}>
            <input type="text" placeholder="Account Holder Name" />
          </Grid>
        </Grid>
        </Box>
      
      </Container>
    </Box>
  );
};

export default AddBank;
