import News from './News/News';
import classes from './Newses.module.css'

const Newses = () => {
  let newsItems = [
    {link: "/news/1", title: "1 title", text: "1 text"},
    {link: "/news/2", title: "2 title", text: "1 21text"},
    {link: "/news/3", title: "3 title", text: "121 text"},
    {link: "/news/4", title: " 4title", text: "1 3text"},
    {link: "/news/5", title: "51 title", text: "1 4text"},
  ]

  let news = newsItems.map( item => <News link={item.link} title={item.title} text={item.text} /> );
    return (
      <div className={classes.items}>
        add news
        <textarea></textarea>
        <button>ADD</button>

        {news}
      </div>
    )
  };
  
  export default Newses;