import Event from './Event/Event';
import classes from './Events.module.css'

const Events = () => {
    return (
      <div className={classes.items}>
        add event
        <textarea></textarea>
        <button>ADD</button>
        <Event title='1title' text='1text'/>
        <Event title='2title' text='2text'/>
        <Event title='3title' text='3text'/>


      </div>
    )
  };
  
  export default Events;