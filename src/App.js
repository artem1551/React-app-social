import Header from '../src/components/header';
import Footer from '../src/components/Footer';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
