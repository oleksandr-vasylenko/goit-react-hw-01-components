import { Profile } from './Profile';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <div className="profile-thumb">
        <Profile />
      </div>
      <GlobalStyle />
    </>
  );
};
