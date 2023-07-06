import React, { useState } from "react";
import { Container, Card, TextField, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
function Signin() {
    // set variables for nickname and disabled state
  const [nickname, setNickname] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  // Generates a random name from a list
  const randomNameGenerate = () => {
    const names = [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Emma",
      "Michael",
      "Olivia",
      "William",
      "Sophia",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  };

  // Click event handler for the "Random" button
  function clickHandler() {
    setNickname(randomNameGenerate);// Set a random name
    setDisabled(false);// Enable the "Continue" button
  }

  // Change event handler for the nickname input field
  function changeHandler(event: { target: { value: any } }) {
    setNickname(event.target.value);// Update the nickname state
    if (event.target.value !== "") {
      setDisabled(false); // If the input field is not empty, enable the "Continue" button
    } else {
      setDisabled(true); // If the input field is empty, disable the "Continue" button
    }
  }

   // Click event handler for the "Continue" button
  function continueHandler(){
    window.location.href = "/home"; // Redirect to the home page
  }
  
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage:
            "linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%);",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            padding: "20px 50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:'16px'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#039BE5", marginBottom: "30px" }}
          >
            Sign In
          </Typography>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <TextField
              onChange={changeHandler}
              value={nickname}
              size="medium"
              label="Your Nickname"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <Button
              onClick={clickHandler}
              size="small"
              variant="contained"
              sx={{ marginLeft: "16px", borderRadius: "16px" }}
            >
              Random
            </Button>
          </Container>
          <Button
          onClick={continueHandler}
            disabled={isDisabled}
            size="large"
            variant="contained"
            sx={{ borderRadius: "16px", marginTop: "30px" }}
          >
            Continue <EastIcon />
          </Button>
        </Card>
      </Container>
    </React.Fragment>
  );
}
export default Signin;
