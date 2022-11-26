import PropTypes from 'prop-types';
import friends from '../../Data/friends';

export const FriendList = () => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  );
};
