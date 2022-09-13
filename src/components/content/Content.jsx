import './Content.css'
import Events from './Events/Events';
import Newses from './Newses/Newses';

const Content = () => {
    return (
      <main className="content">
        {/* <Newses /> */}
        <Events />
      </main>
    )
  };
  
  export default Content;