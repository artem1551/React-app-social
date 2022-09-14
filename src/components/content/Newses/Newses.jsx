import News from './News/News';
import classes from './Newses.module.css'

const Newses = () => {
    return (
      <div className={classes.items}>
        add news
        <textarea></textarea>
        <button>ADD</button>

        <News link='/news/1' title='1 title' text='1 text'/>
        <News link='/news/2' title='2 title' text='2 text'/>
        <News link='/news/3' title='3 title' text='3text'/>
        <News link='/news/4' title='4 title' text='4text'/>
      </div>
    )
  };
  
  export default Newses;