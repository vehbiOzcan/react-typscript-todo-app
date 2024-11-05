import './App.css'
import PageContainer from './components/PageContainer'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {


  return (
    <>
      <PageContainer>
        <TodoCreate />
        <TodoList/>
      </PageContainer>
    </>
  )
}

export default App
