import { GlobalStyle } from './GlobalStyle';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// import user from '../Data/user';
// import statistics from '../Data/data';
// import friends from '../Data/friends';
// import transactions from '../Data/transactions';

export const App = () => {
  return (
    <>
      <div>
        <Profile
        // username={user.username}
        // tag={user.tag}
        // location={user.location}
        // avatar={user.avatar}
        // stats={user.stats}
        />
      </div>

      <div>
        <Statistics />
      </div>

      <div>
        <FriendList />
      </div>

      <div>
        <TransactionHistory />
      </div>

      <GlobalStyle />
    </>
  );
};
