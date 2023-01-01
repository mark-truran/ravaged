import React from 'react';
import { Alert } from 'flowbite-react'
import './App.css';

function App() {
  return (
    <div className="App">
      <Alert
        color="success"
        onDismiss={function onDismiss() { return alert("Alert dismissed!") }}
      >
        <span>
          <span className="font-medium">
            Success!
          </span>
          {' '}React + Tailwind + Flowbite are working OK
        </span>
      </Alert>
    </div>
  );
}

export default App;
