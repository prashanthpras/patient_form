import React from 'react'
import Form from './components/pages/Form';
import PatientProvider from './context/PatientContext';



function App() {
  return (
    <>
      <PatientProvider>
     <Form/>

      </PatientProvider>
    </>
  );
}

export default App;
