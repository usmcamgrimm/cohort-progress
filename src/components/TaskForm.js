import { useState } from 'react'
import db from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('')
  const [dateDue, setDateDue] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        'task-name': taskTitle,
        'date-due': dateDue,
        'description': description,
        'completed': false,
        created: Timestamp.now()
      })
      onclose()
    } catch (error) {
      alert(error)
    }
  } 

  return(
    <form 
      className='taskForm'
      onSubmit={handleSubmit}
    >
      <div className='form-container'>
        <label>
          Task
        </label>
        <input
          type='text'
          name='taskTitle'
          placeholder='Add a task'
        />
        <label>
          Due By
        </label>
        <input
          type='text'
          name='dateDue'
          placeholder='Task Due By...'
        />
        <label>
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