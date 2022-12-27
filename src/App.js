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
  const [pageData, setPageData] = useState({});

  const pageHandler = p => {
    setPage(p);
  }

  const infoPageHandler = infoData => {
    setPageData({ ...pageData, infoData });
    window.localStorage.setItem('name', infoData.name);
    window.localStorage.setItem('email', infoData.email);
    window.localStorage.setItem('phone', infoData.phone);
    setPage(2);
  }

  return (
    <div className="container">
      <Card pageHandler={pageHandler} activePage={page}>
        {page === 1 && <InfoPage infoPageHandler={infoPageHandler} />}
        {page === 2 && <PlanPage />}
        {page === 3 && <AddonsPage />}
        {page === 4 && <SummaryPage />}
      </Card>
    </div>
  );
};

export default App;
