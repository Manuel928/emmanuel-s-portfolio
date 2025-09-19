import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Page/Home";
import ProjectDetails from "./Page/ProjectDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
