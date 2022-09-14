import classes from './News.module.css'

const News = (props) => {
    return (
      <ul>
        <li className={classes.item}>
          <a href={props.link}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <span>like</span>
          </a>
        </li>
      </ul>
    )
  };
  
  export default News;