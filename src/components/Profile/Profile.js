// import PropTypes from 'prop-types';
import user from '../../Data/user';
import {
  ProfileCard,
  Description,
  Name,
  Avatar,
  Stats,
  StatList,
} from './Profile.styled';

export const Profile = () => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={user.avatar} alt="User avatar" className="avatar" />
        <Name>{user.username}</Name>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </Description>

      <Stats>
        <StatList>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </StatList>
        <StatList>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </StatList>
        <StatList>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </StatList>
      </Stats>
    </ProfileCard>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };
