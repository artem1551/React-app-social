import Header from './components/header/header';
import Footer from './components/footer/Footer';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/Content';

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
