import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Ecosystem from './pages/Ecosystem/Ecosystem';
import CheckRewards from './pages/CheckRewards/CheckRewards';
import StakingCalculator from './pages/StakingCalculator/StakingCalculator';
import FTDocs from './pages/FTDocs/FTDocs';
import Footer from './components/Footer/Footer';

import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Topbar from "./scenes/global/Topbar";
import Calendar from "./scenes/calendar/calendar";
import Geography from "./scenes/geography";
import './App.css';

function MainAppLayout() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
          <Routes>
            <Route path="/home" index element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/rewards" element={<CheckRewards />} />
            <Route path="/calculator" element={<StakingCalculator />} />
            <Route path="/docs" element={<FTDocs />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AdminDashboardLayout() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/*" index element={<MainAppLayout />} />
        <Route path="/dashboard/*" element={<AdminDashboardLayout />} />
      </Routes>
  );
}

export default App;
