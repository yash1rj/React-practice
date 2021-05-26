import { Fragment, useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import NewTask from './NewTask/NewTask';
import Tasks from './Tasks/Tasks';

const TaskApp = (props) => {

    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendHttpRequest } = useHttp();

    useEffect(() => {
        const transformTasks = (data) => {
            const loadedTasks = [];
    
            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }
    
            setTasks(loadedTasks);
        };

        sendHttpRequest({
            url: 'https://react-hooks-basketapp-default-rtdb.firebaseio.com/tasks.json'
        }, transformTasks);
    }, [sendHttpRequest]);

    const taskAddHandler = (task) => {
        // console.log(task);
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return <Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
            items={tasks}
            loading={isLoading}
            error={error}
            onFetch={sendHttpRequest}
        />
    </Fragment>;
};

export default TaskApp;
