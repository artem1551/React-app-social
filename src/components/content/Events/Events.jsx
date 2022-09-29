import Event from './Event/Event';
import classes from './Events.module.css'
// import state from '../redux/state';

const Events = () => {
    let event = [
      {link: "/events/1", title: "1 title", text: "1text"},
      {link: "/events/2", title: "2title", text: "2text"},
      {link: "/events/3", title: "3title", text: "3text"},
      {link: "/events/4", title: "4title", text: "4text"},
    ]

    let elemEvent = event.map( item => <Event link={item.link} title={item.title} text={item.text} /> );
    return (
      <div className={classes.items}>
        add event
        <textarea></textarea>
        <button>ADD</button>
        { elemEvent }


      </div>
    )
  };
  
  export default Events;