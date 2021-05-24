import { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UserLists from './components/UserLists/UserLists';

function App() {

  const [users, setUsers] = useState([]);

  const newUserAddedHandler = (name, age) => {
    setUsers(prevUsers => {
      return [ {name: name, age: age, id: Math.random().toString()}, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser addedUserInfo={newUserAddedHandler} />
      <UserLists userData={users} />
    </div>
  );
}

export default App;
