import React from 'react';
import useHttp from '../../hooks/use-http';
import Section from '../Section/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { isLoading, error, sendHttpRequest } = useHttp();

  const passingNewData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = (taskText) => {
    sendHttpRequest({
      url: 'https://react-hooks-basketapp-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      }
    }, passingNewData.bind(null, taskText));
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
