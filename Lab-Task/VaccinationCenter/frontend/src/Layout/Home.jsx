import React from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { padding } from "@mui/system";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          gap: 5,
          backgroundImage: `url('https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          opacity: 0.9,
          backgroundRepeat: "no-repeat",
          backgroundSize: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <Typography variant="body1">Welcome to Corf</Typography>
        <Typography variant="h1">We Ensure Safety</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
          sapien in ipsum consectetur interdum.{" "}
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#06ABB6" }}>
          book Now
        </Button>
      </Box>

      <Box sx={{ paddingX: 30 }}>
        <Box sx={{ display: "flex", textAlign: "center", paddingY: 5, gap: 1 }}>
          <Card sx={{ padding: 4 }}>
            <img
              src="https://corf-react.envytheme.com/img/facility-img/facility-icon4.png"
              alt=""
            />
            <Typography variant="h4">Laboratory Services</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Typography>
            <Button sx={{ color: "#06ABB6" }}>Read More +</Button>
          </Card>
          <Card sx={{ padding: 4 }}>
            <img
              src="https://corf-react.envytheme.com/img/facility-img/facility-icon4.png"
              alt=""
            />
            <Typography variant="h4">Laboratory Services</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Typography>
            <Button sx={{ color: "#06ABB6" }}>Read More +</Button>
          </Card>
          <Card sx={{ padding: 4 }}>
            <img
              src="https://corf-react.envytheme.com/img/facility-img/facility-icon4.png"
              alt=""
            />
            <Typography variant="h4">Laboratory Services</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Typography>
            <Button sx={{ color: "#06ABB6" }}>Read More +</Button>
          </Card>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography variant="h2" sx={{ marginY: 5 }}>
              We Employ Latest Technology & Company
            </Typography>
            <Typography sx={{ marginY: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Typography>
            <Typography sx={{ marginY: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Typography>
            <List>
              <ListItem>
                <Checkbox
                  defaultChecked
                  sx={{
                    "&.Mui-checked": {
                      color: "#06ABB6",
                    },
                  }}
                />
                <ListItemText>Lorem Ipsum</ListItemText>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultChecked
                  sx={{
                    "&.Mui-checked": {
                      color: "#06ABB6",
                    },
                  }}
                />
                <ListItemText>Lorem Ipsum</ListItemText>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultChecked
                  sx={{
                    "&.Mui-checked": {
                      color: "#06ABB6",
                    },
                  }}
                />
                <ListItemText>Lorem Ipsum</ListItemText>
              </ListItem>
              <ListItem>
                <Checkbox
                  defaultChecked
                  sx={{
                    "&.Mui-checked": {
                      color: "#06ABB6",
                    },
                  }}
                />
                <ListItemText>Lorem Ipsum</ListItemText>
              </ListItem>
              
            </List>
          </Box>
          <img
            src="https://corf-react.envytheme.com/img/home-seven/home-seven-about.jpg"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
