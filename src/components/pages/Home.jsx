import React from "react";
import Sidenav from "../Sidenav";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar";
// import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { blue, grey, red } from "@mui/material/colors";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PropTypes from "prop-types";
import FilterHeader from "../FilterHeader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      <Box height={60} />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, px: 3 }} bgcolor={"#26c6da"}>
          {/* <Container maxWidth="sm" display='' color= 'red' >  */}
          <Stack direction="row" spacing={1} height={100} alignItems={"end"}>
            <div className="bg-light">
              <AppRegistrationIcon sx={{ fontSize: 40 }} color="main" />
            </div>

            <Typography variant="h4" gutterBottom color={"white"}>
              SPOC Management
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} height={100} alignItems={"end"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Funnel Management" {...a11yProps(0)} />
                <Tab label="Performance Metric" {...a11yProps(1)} />
                <Tab label="SPOC" {...a11yProps(2)} />
              </Tabs>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box component="main" bgcolor={"#9e9e9e"} px={30}>
        <CustomTabPanel value={value} index={0}>
          <Box component="main" >
          <FilterHeader/>
          </Box>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </>
  );
}
