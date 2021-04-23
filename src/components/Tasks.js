import Task from './Task';


const Tasks = (props) => {

    return (
        <div>
            {/* we are using key to avoid the error child in a list should have a unique key prop  */}
            {props.tasks.map((task) => (<Task key={task.id} task={task} onDelete={props.onTasksDelete} onTaskToggle={props.onAppToggle} />))}
        </div>
    )
}

export default Tasks
