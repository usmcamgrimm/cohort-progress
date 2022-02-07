import Header from './components/Header'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div>
      <Header />
      <section className='form-container'>
        <TaskForm />
      </section>
    </div>
  )
}

export default App