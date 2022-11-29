import PropTypes from 'prop-types';

import { FriendItem, StatusSign } from './Friend.styled';

export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <FriendItem>
      <StatusSign isOnline={isOnline}></StatusSign>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
