import {
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
  AccordionSummary,
  AccordionDetails ,
  Accordion,
} from "@mui/material";
import { Box } from "@mui/system";
import { tab } from "@testing-library/user-event/dist/tab";
import React, { useContext, useState } from "react";
import Btnn from "./Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import { PatientContexts } from './../../context/PatientContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FORM_DETAILS = {
  firstName: "",
  lastName: "",
  date: "",
  email: "",
  phone: "",
  address: "",
};

function Form() {
  let { dispatch, patientList, displayForm } = useContext(PatientContexts);
  let [trigger, setTrigger] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "lightblue",
          minHeight: "100vh",
          gap: 2,
        }}
      >
        <Stack>
          <Typography fontSize={22} fontWeight={700} color={"purple"}>
            Referral Patients Form
          </Typography>
          <Typography>Hayes Valley Health San Fransisco</Typography>
        </Stack>
        <Container
          component="div"
          sx={{ background: "#efefef59", width: "36rem", height: "40rem" ,borderRadius:"10px",paddingTop:"10px" }}
        >
          {patientList.map((item, index) => {
            return (
              <div>
              <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                <AccordionSummary 
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                > <Typography sx={{  }}>
                <p style={{width:"25px",height:"25px",padding:"2px",margin:"6px",background:"skyblue",borderRadius:"5px",textAlign:"center" }}>{index+1}</p>
             </Typography>
                  <Typography sx={{ width: '85%', flexShrink: 0 }}>
                   <h2>{item.firstName}</h2>
                </Typography>
                  <Typography sx={{ justifyContent: 'flex-end',margin:"4px", }}>
                    <DeleteIcon 
                    onClick={()=>dispatch({type:"delete",payload: item.id })}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor:"gray",color:"white",lineHeight:"25px"}}>
                  <Typography>
                   FirstName:{item.firstName}
                  </Typography>
                  <Typography>
                   LastName:{item.lastName}
                  </Typography>
                  <Typography>
                   Date:{item.date}
                  </Typography>
                  <Typography>
                   Email:{item.email}
                  </Typography>
                  <Typography>
                   Phone number:{item.phone}
                  </Typography>
                  <Typography>
                   Address:{item.address}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
             
            </div>
            );
          })}
          {displayForm && (
            <Btnn SubmitIt={trigger} setTrigger={setTrigger} />
          )}
        </Container>
        <Button
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
          color="success"
          onClick={() => {
            // if (displayForm) {
            //   setTrigger(!false);
            //   return;
            // }
            // dispatch({type:"openForm"})
            setTrigger(!false)
          }}
        >
          + Add Referal
        </Button>
        <Button variant="contained" sx={{ width: "28rem" }}>
          Send referals
        </Button>
      </Box>
    </>
  );
}

export default Form;
