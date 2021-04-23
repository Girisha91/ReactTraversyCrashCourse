import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting At School',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food SHopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ]);


  // to delete individual tasks 
  const deleteIndiTask = (id) => {
    console.log("'delete", id);
    // dont put flower brackets after arrow function
    setTasks(tasks.filter((task) => task.id !== id.id))
  }

  // toggle remeinder
  const toggleFromApp = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id.id ? { ...task, reminder: !task.reminder } : task))
  }


  // add task 
  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // toggling add button 
  const [showAddTask, setShowAddTask] = useState(false)
  return (
    <div className="App">
      <Header title="Task Tracker" onAddBut={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* shorter form of ternary without else  */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {!showAddTask && (tasks.length > 0 ? (<Tasks tasks={tasks} onTasksDelete={deleteIndiTask} onAppToggle={toggleFromApp} />) : ('No tasks to show'))}
    </div>
  );
}

export default App;
