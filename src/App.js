import { useState } from "react";
import Particles from "react-tsparticles";
import './App.css';

function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);
  const [bilPerPerson, setbilPerPerson] = useState(0);
  const [totaltip, setTotaltip] = useState(0);
  const [tipPerPersonn, setTipPerPersonn] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalTip = (parseFloat(subtotal) * parseFloat(tip)) / 100;
    const totalAmount = (subtotal + totalTip) / 10;
    const tipPerPerson = totalTip / person;
    const billPerPerson = totalAmount / person;
    setTotal(totalAmount);
    setbilPerPerson(billPerPerson);
    setTotaltip(totalTip);
    setTipPerPersonn(tipPerPerson);
  }



  return (
    <div className="App">
       <Particles
      id="tsparticles"
      
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 1200,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#eee",
          },
          links: {
            color: "#eee",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <div class = "container center">
      <div class = "bill-divider-wrapper">
        <div class = "title">
          <h1>Bill Divide</h1>
        </div>

        <div class = "bill-inputs">
          <form id = "bill-divider-form" onSubmit={handleSubmit}>
            <div class = "form-group">
              <label for = "subtotal">subtotal bill</label>
              <input type = "number" id = "subtotal" class = "form-control" min = "0" step = "any" required onChange={e => setSubtotal(e.target.value)} />
            </div>
            
            <div class = "form-group">
              <label for = "tip">tip (%)</label>
              <input type = "number" id = "tip" class = "form-control" min = "0" step = "any" required onChange={e => setTip(e.target.value)} />
            </div>

            <div class = "form-group">
              <label for = "no-of-person">no of person</label>
              <input type = "number" id = "no-of-person" class = "form-control" min = "0" step = "1" required  onChange={e => setPerson(e.target.value)}/>
            </div>

            <input type = "submit" id = "calc-btn" value = "calculate" />
          </form>
        </div>

        <div class = "bill-output">
          <div class = "text-group">
            <h3>Total Bill</h3>
            <span id = "total-bill">₹ {total}</span>
          </div>

          <div class = "text-group">
            <h3>Bill Per Person</h3>
            <span id = "bill-per-person">₹ {bilPerPerson}</span>
          </div>

          <div class = "text-group">
            <h3>Total Tip</h3>
            <span id = "total-tip">₹ {totaltip}</span>
          </div>

          <div class = "text-group">
            <h3>Tip Per Person</h3>
            <span id = "tip-per-person">₹ {tipPerPersonn}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
