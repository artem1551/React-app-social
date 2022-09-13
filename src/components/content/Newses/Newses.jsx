import News from './News/News';
import classes from './Newses.module.css'

const Newses = () => {
    return (
      <div className={classes.items}>
        add news
        <textarea></textarea>
        <button>ADD</button>

        <News title='1 title' text='1 text'/>
        <News title='2 title' text='2 text'/>
        <News title='3 title' text='3text'/>
        <News title='4 title' text='4text'/>
      </div>
    )
  };
  
  export default Newses;