import Todo from './Todo'
import { Divider, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

function TodoList() {

    const {todos} = useSelector((state:RootState) => state.todo)

   
    return (
        <div style={{ marginTop: '30px' }}>
            <Typography textAlign={'center'} sx={{ margin: '10px' }} variant='h5'>Todolarım</Typography>
            <Divider /> <br />
            <Stack spacing={1.5} >
                {todos && todos.map((todo:TodoType) => <Todo key={todo.id} todoProps ={todo}/>)}
            </Stack>
        </div>
    )
}

export default TodoList