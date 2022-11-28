// import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <div>
      <span /*isOnline={isOnline}*/></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};
