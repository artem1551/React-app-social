import classes from './Event.module.css'

const Event = (props) => {
    return (
      <ul>
        <li className={classes.item}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <span>like</span>
        </li>
      </ul>
    )
  };
  
  export default Event;