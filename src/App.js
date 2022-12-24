import { useState } from "react";
// Css
import "./App.css";
// Components
import Card from "./components/UI/Card/Card";

const App = () => {
  const [page, setPage] = useState(1);

  const pageHandler = p => {
    setPage(p);
  }

  return (
    <div className="container">
      <Card pageHandler={pageHandler} activePage={page}>
        <h1>dato</h1>
      </Card>
    </div>
  );
};

export default App;
