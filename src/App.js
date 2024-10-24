import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Login from "./components/Login";
import Accordion from "./components/Accordion";
import ProtectedRoute from "./components/ProtectedRoute";
import Comments from "./components/comment/Comments";
import ImageSlider from "./components/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";

function App() {
  return (
    <>
      <header>
        <nav className="bg-gray-800 p-4 text-white flex justify-between">
          <div>
            <a href="/" className="hover:underline">
              Home
            </a>
          </div>
          <div className="flex gap-8">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/accordion" className="hover:underline">
              Accordion
            </a>
            <a href="/comments" className="hover:underline">
              Comments
            </a>
            <a href="/image-slider" className="hover:underline">
              Image-Slider
            </a>
            <a href="/pagination" className="hover:underline">
              Pagination
            </a>
            <a href="/live" className="hover:underline">
              Live Chat
            </a>
            <a href="/login" className="hover:underline">
              Login
            </a>
          </div>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/live" element={<LiveChat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
