import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Name,
  Avatar,
  Stats,
  StatList,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <StatList>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatList>
        <StatList>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatList>
        <StatList>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatList>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
