// import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li class="item">
      <span isOnline={isOnline}></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
