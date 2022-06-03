import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Stack,
  TableContainer,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { deepOrange } from "@mui/material/colors";
import { PatientContexts } from './../../context/PatientContext';

let detail = {
  firstName: "",
  lastName: "",
  date: "",
  email: "",
  phone: "",
  address: "",
};
const Btnn = ({ SubmitIt, setTrigger }) => {
  let { openForm, patientList, dispatch } = useContext(PatientContexts);
  let [details, setDetails] = useState(detail);

  let handleSubmit = () => {
    dispatch({ type: "add", payload: { ...details, id: Date.now() } });
    setTrigger(false)
    setTimeout(() => {
      setDetails(detail)
    },10);
  };
  return (
    <Container
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        margin: "0rem",
        marginTop: "2rem",
        background: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        minHeight: "26rem",
        width: "33rem",
        overflow: "hidden",
      }}
    >
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            
          }}
        >
          {(SubmitIt) && handleSubmit()}
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Button variant="contained">{patientList.length + 1}</Button>
            <Typography variant="h6" sx={{}}>
              New Referreal
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <DeleteIcon />
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <FormControl>
            <InputLabel htmlFor="my-input">First Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={details.firstName}
              onChange={e =>
                setDetails({ ...details, firstName: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Last Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={details.lastName}
              onChange={e =>
                setDetails({ ...details, lastName: e.target.value })
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <FormControl>
            <InputLabel htmlFor="my-input">Date</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-date"
              value={details.date}
              onChange={e => setDetails({ ...details, date: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              value={details.email}
              onChange={e => setDetails({ ...details, email: e.target.value })}
            />
          </FormControl>
        </Box>

        <FormControl>
          <InputLabel htmlFor="my-input">Phone</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-date"
            value={details.phone}
            onChange={e => setDetails({ ...details, phone: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Address</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={details.address}
            onChange={e => setDetails({ ...details, address: e.target.value })}
          />
        </FormControl>
      </>
    </Container>
  );
};

export default Btnn;
