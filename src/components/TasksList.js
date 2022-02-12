import Task from './Task'

function TasksList() {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </>
  )
}