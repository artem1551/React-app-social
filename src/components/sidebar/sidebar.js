
import classes from './Sidebar.module.css'


const Sidebar = () => {
    return (
      <div className={classes.sidebar}>
        <ul>
            <li>
              <a className={classes.item} href='/news'>News</a>
            </li>
            <li>
              <a className={classes.item} href='/events'>Events</a>
            </li>
        </ul>
      </div>
    )
  };
  
  export default Sidebar;