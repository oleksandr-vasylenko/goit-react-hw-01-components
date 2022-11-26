// import PropTypes from 'prop-types';

export const FriendList = friends => {
  return friends.map(element => (
    <li className="item">
      <span className="status">{element.isOnline}</span>
      <img
        className="avatar"
        src={element.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{element.name}</p>
    </li>
  ));
};
