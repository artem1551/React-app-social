import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Events from './Events/Events';
import Newses from './Newses/Newses';

const Content = () => {
  return (
      <main className="content">
        <Router>
        <Routes>
          <Route path="/news" element={<Newses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Events />} />
        </Routes>
        </Router>
      </main >

  )
};

export default Content;