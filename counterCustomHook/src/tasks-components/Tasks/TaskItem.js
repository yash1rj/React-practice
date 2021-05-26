import React from 'react';
import classes from './TaskItem.module.css';

const TaskItem = (props) => {

  // const { sendHttpRequest } = useHttp();

  // const onDeleteHandler = (id) => {
  //   props.onRemoveTask(id);
  //   sendHttpRequest({
  //     url: 'https://react-hooks-basketapp-default-rtdb.firebaseio.com/tasks/' + id + '.json/',
  //     method: 'DELETE'
  //   });
  // };

  return <li className={classes.task}>{props.children}</li>
};

export default TaskItem;