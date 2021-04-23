import { FaTimes } from 'react-icons/fa';

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onTaskToggle(props.task)}>
            <h3>{props.task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(props.task)} /></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task
