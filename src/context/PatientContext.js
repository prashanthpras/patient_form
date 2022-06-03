import React, { createContext, useReducer } from "react";

export const PatientContexts = createContext();

const InitialState = {
  patientList: [],
  openForm: 1,
  displayForm: true,
};
const reducer = (state,action) => {
    switch (action.type) {
        case "add":
            let newList = [...state.patientList]
            newList.push(action.payload)
            if(state.patientList.length==4)
            return {...state,patientList:newList,displayForm:false}
            return { ...state, patientList: newList}
        case "openForm":
            return { ...state, displayForm: true }
        case "delete":
            console.log("lksjdkl",action.payload);
            let id = action.payload;
            let updatedList = state.patientList.filter((item) => item.id != id);
            return { ...state, patientList: updatedList };
    }
}
const PatientProvider = ({ children }) => {
    let[state,dispatch]=useReducer(reducer,InitialState)
    let msg = "from context api"
    let provideValues = {
      dispatch,
      patientList:state.patientList,
      openForm: state.openForm,
      displayForm:state.displayForm
    };
    return (
        <PatientContexts.Provider value={provideValues}>
            {children}
        </PatientContexts.Provider>
    )
}

export default PatientProvider;