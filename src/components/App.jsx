import { Profile } from './Profile';
import { GlobalStyle } from './GlobalStyle';
import user from '../data/user';

export const App = () => {
  return (
    <>
      <div className="profile-thumb">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <GlobalStyle />
    </>
  );
};
