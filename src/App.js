import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Work from "./Work";
import { Stack } from "@mui/material";
import React from "react";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    // Initializing the state
    this.state = { color: "lightgreen" };
  }
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "/assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Header />
          </nav>
          <div style={{marginLeft:"20%", marginRight:"20%"}}>
            <Routes>
              <Route path="/" exact component={LandingPage} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Stack direction="column" gap="20rem">
//         <Header />
//         <LandingPage />
//       </Stack>
//     </div>
//   );
// }

export default App;
