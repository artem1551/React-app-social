import classes from './Footer.module.css'

const Footer = () => {
  return (
    <nav className={classes.footer}>
      Footer menu
      <ul>
        <li className={classes.item}>1</li>
        <li className={classes.item}>2</li>
        <li className={` ${classes.item} ${classes.active} `}>3</li>
      </ul>
    </nav>
  )
};

export default Footer;