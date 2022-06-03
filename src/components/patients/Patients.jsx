import React, { Fragment, useState } from "react";
import {
  Button,
  TextField,
  NativeSelect,
  InputLabel,
  FormControl,
  Item,
} from "@mui/material";
import Col from "./patients.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

let initailValues = {
  FirstName: " ",
  LastName: " ",
  MobileNumber: " ",
  Email: " ",
  Age: " ",
  DOB: " ",
  Address: " ",
  Reason: " ",
};

const Patients = () => {
  let [values, setValues] = useState(initailValues);
  let [data, setData] = useState([]);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setData([...data, { ...values }]);
    setValues(initailValues);
  };

  let AddPatients = (e) => {
    e.preventDefault();
    setValues("");
    setData();
  };

  return (
    <section className={Col.section}>
      <article>
        <h3>Patient Referral Form</h3>
        <h4>BANGALORE HEALTH CARE +</h4>

        <div className={Col.data}>
          {data.map((a) => {
            return (
              <Fragment>
                <div className={Col.details}>
                  <p>{a.FirstName}</p>
                  <p>{a.LastName}</p>

                  <div className={Col.hid}>
                    <details>
                      {/* <ArrowDropDownIcon/> */}
                      <summary>bghjkml</summary>

                      <p>Contact:{a.MobileNumber}</p>
                      <p>Email:{a.Email}</p>
                      <p>Age:{a.Age}</p>
                      <p>DOB:{a.DOB}</p>
                      <p>Reason:{a.Reason}</p>

                      
                      
                    </details>

                    <button>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className={Col.container}>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard"
                label="First Name*"
                type="text"
                value={values.FirstName}
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, FirstName: e.target.value })
                }
              />
              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard"
                label="Last Name*"
                type="text"
                value={values.LastName}
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, LastName: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard"
                label="Mobile num"
                type="text"
                value={values.MobileNumber}
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, MobileNumber: e.target.value })
                }
              />
              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard"
                label="Email*"
                value={values.Email}
                type="email"
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, Email: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard"
                label="Age"
                type="number"
                value={values.Age}
                variant="standard"
                onChange={(e) => setValues({ ...values, Age: e.target.value })}
              />

              <TextField
                sx={{
                  width: "25%",
                  margin: 1,
                }}
                id="standard-basic"
                label="DOB"
                type="text"
                value={values.DOB}
                variant="standard"
                onChange={(e) => setValues({ ...values, DOB: e.target.value })}
              />
            </div>

            <TextField
              sx={{
                width: "50%",
                margin: 1,
              }}
              id="standard"
              label="Notes/Reason"
              value={values.Reason}
              variant="standard"
              size="medium"
              onChange={(e) => setValues({ ...values, Reason: e.target.value })}
            />

            <div>
              <Button
                onClick={AddPatients}
                sx={{
                  width: "50%",
                  height: 40,
                  backgroundColor: "#1d1d6d",
                  borderRadius: 5,
                  marginBottom: 1,
                  marginTop: 1,
                }}
              >
                SEND REFERRALS
              </Button>
            </div>
            <Button
              className={Col.send}
              variant="contained"
              color="info"
              type="submit"
              sx={{
                width: "50%",
                height: 40,
                borderRadius: 5,
              }}
            >
              {" "}
              + ADD ANOTHER PATIENTS
            </Button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Patients;
