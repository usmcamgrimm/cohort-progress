function TasksList() {
  return(
    <div className='task-card'>
      <h2>
        {task.taskTitle}
      </h2>
      <p className='dateDue'>
        {task.dateDue}
      </p>
      <p className='taskDescription'>
        {task.description}
      </p>
    </div>
  )
}

export default TasksList