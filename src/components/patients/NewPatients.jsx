import React from 'react'
import Color from "./newpatient.module.css"

const NewPatients = (data) => {

  return (
    <div className={Color.div}>
          <div>
          {data.map((da) => {
            let {
              FirstName,
              LastName,
              MobileNumber,
              Email,
              Age,
              DOB,
              Address,
              Reason,
            } = da.data;
            return(
              <div className={Color.cont}>
              <span>{FirstName}</span>
              <span>{LastName}</span>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default NewPatients