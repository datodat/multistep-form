import { useState } from "react";
// Css
import "./App.css";
// Components
import Card from "./components/UI/Card/Card";
import InfoPage from "./components/Pages/InfoPage/InfoPage";
import PlanPage from "./components/Pages/PlanPage/PlanPage";
import AddonsPage from "./components/Pages/AddonsPage/AddonsPage";
import SummaryPage from "./components/Pages/SummaryPage/SummaryPage";

const App = () => {
  const [page, setPage] = useState(1);

  const pageHandler = p => {
    setPage(p);
  }

  return (
    <div className="container">
      <Card pageHandler={pageHandler} activePage={page}>
        {page === 1 && <InfoPage />}
        {page === 2 && <PlanPage />}
        {page === 3 && <AddonsPage />}
        {page === 4 && <SummaryPage />}
      </Card>
    </div>
  );
};

export default App;
