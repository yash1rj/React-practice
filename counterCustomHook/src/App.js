import React from 'react';
import BasicForm from './BasicForm';
import BackwardCounter from './counters-components/BackwardCounter';
import ForwardCounter from './counters-components/ForwardCounter';
import TaskApp from './tasks-components/TaskApp';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <BasicForm />
      <TaskApp />
    </React.Fragment>
  );
}

export default App;
