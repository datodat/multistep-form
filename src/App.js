import { useState } from "react";
// Css
import "./App.css";
// Components
import Card from "./components/UI/Card/Card";
import InfoPage from "./components/PageComponents/InfoPage/InfoPage";
import PlanPage from "./components/PageComponents/PlanPage/PlanPage";
import AddonsPage from "./components/PageComponents/AddonsPage/AddonsPage";
import SummaryPage from "./components/PageComponents/SummaryPage/SummaryPage";
import ThanksPage from "./components/PageComponents/ThanksPage/ThanksPage";

const App = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState({});

  const changePage = (direction, data) => {
    if (direction === "back") {
      setPage((i) => i - 1);
    } else {
      setPageData({ pageData, ...data });
      setPage((i) => i + 1);
    }
  };

  // Infopage
  const infoPageHandler = (infoData) => {
    setPageData({ ...pageData, infoData });
    window.localStorage.setItem("name", infoData.name);
    window.localStorage.setItem("email", infoData.email);
    window.localStorage.setItem("phone", infoData.phone);
    setPage(2);
  };

  // Planpage
  const planNextHandler = (planData) => {
    setPageData({ ...pageData, planData });
    setPage(3);
  };

  const planBackHandler = () => {
    setPage(1);
  };

  return (
    <div className="container">
      <Card activePage={page}>
        {page === 1 && <InfoPage changePage={changePage} />}
        {page === 2 && <PlanPage changePage={changePage} />}
        {page === 3 && <AddonsPage changePage={changePage} />}
        {page === 4 && <SummaryPage changePage={changePage} />}
        {page === 5 && <ThanksPage />}
      </Card>
    </div>
  );
};

export default App;
