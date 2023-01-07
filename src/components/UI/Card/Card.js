import './Card.css';

import Navigation from '../Navigation/Navigation';

const Card = (props) => {
  const classes = `card ${props.classes}`;

  return <div className={classes}>
    <Navigation activePage={props.activePage} />
    {props.children}
  </div>;
};

export default Card;