import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;
  return (
    <>
      <PortalOne />

      <PortalOne />
    </>
  );
}

function PortalOne() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({});
  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((currStep) => currStep - 1);
    // setTest({ name: "" });
  }
  function handleNext() {
    // alert("usama -necxt");
    // if (step < 3) setStep(step + 1); //totally valid but below one is effiecnt using call back func()
    if (step < 3) setStep((curStep) => curStep + 1);
    // setTest({ name: "Usma" });
  }

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2" }}
              onClick={handlePrevious}>
              Previous
            </button>
            <button style={{ backgroundColor: "#7950F2" }} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

