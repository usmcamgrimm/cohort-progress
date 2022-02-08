function TaskForm() {
  return(
    <form className='taskForm'>
      <div className='form-container'>
        <label htmlFor='task-title'>
          Task
        </label>
        <input
          type='text'
          name='task-title'
          placeholder='Add a task'
        />
        <label htmlFor='task-due'>
          Due By
        </label>
        <input
          type='text'
          name='task-due'
          placeholder='Task Due By...'
        />
        <label htmlFor='description'>
          Description
        </label>
        <textarea
          type='text'
          name='description'
          placeholder='Add a description'
        />
        <input
          type='submit'
          value='Add Task'
          className='sub-btn btn'
        />
      </div>
    </form>
  )
}

export default TaskForm