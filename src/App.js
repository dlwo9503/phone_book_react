import "./App.css";
import Main from "./components/Main";
import styled from "styled-components";

const Title = styled.div`
  color: black;
  font-size: large;
  font-weight: bold;
  margin-bottom: 15px;
`;

function App() {
  return (
    <div className="app">
      <Title>Unit6 연락처</Title>
      <Main />
    </div>
  );
}

export default App;
