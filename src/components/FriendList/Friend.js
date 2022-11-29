import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <div>
      <span isOnline={isOnline}>o</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
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
