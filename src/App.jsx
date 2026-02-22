import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Article from "./pages/Article";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}