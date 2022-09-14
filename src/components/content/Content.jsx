import { BrowserRouter, Routes, Route } from "react-router-dom"; import './Content.css'
import Events from './Events/Events';
import Newses from './Newses/Newses';

const Content = () => {
  return (
    <BrowserRouter>
      <main className="content">
        <Routes>
          <Route path="/news" element={<Newses />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main >
    </BrowserRouter>

  )
};

export default Content;