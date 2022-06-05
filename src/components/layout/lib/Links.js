import { Link } from 'react-router-dom';

import { links } from './textLib';

const Links = (props) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <Link to={link.route}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
