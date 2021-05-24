import React, { useState } from 'react';
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
    <React.Fragment>
      <NewUser addedUserInfo={newUserAddedHandler} />
      <UserLists userData={users} />
    </React.Fragment>
  );
}

export default App;
