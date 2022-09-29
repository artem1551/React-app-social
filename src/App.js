import Header from './components/header/header';
import Footer from './components/footer/Footer';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/Content';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Events from './components/content/Events/Events'
import Newses from './components/content/Newses/Newses';

const App = () => {
  return (
    <div className="App">

      {/* <Router render={ () => <Header />} /> */}
      {/* <Router>
        <Routes>
          <Route path="/news" element={<Newses />} />
          <Route path="/" element={<Events />} />
        </Routes>
      </Router> */}

      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
