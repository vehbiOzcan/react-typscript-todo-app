import React, { useState } from 'react'
import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/todoSlice';

interface TodoProp {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProp) {

    const { id, content } = todoProps;
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>(content);
    const [editable, setEditable] = useState<boolean>(false);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Bir Todo giriniz !")
            return;
        }
        const payload:TodoType = {
            id:id,
            content:newTodo
        }
       dispatch(updateTodoById(payload))
       setEditable(false)
    }

    return (
        <Paper sx={{ padding: '10px' }}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'} >
                {editable ? 
                    <TextField
                        sx={{flexGrow:1, paddingRight:'20px'}}
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setNewTodo(e.target.value)}
                        variant="standard"
                    /> : <Typography variant='body1' >{content}</Typography> 
                }
                <div>
                    <Stack direction={'row'} spacing={1}>
                        {
                            editable ?
                                (<Button onClick={handleUpdateTodo} color='success' variant='contained' >
                                    <FaCheck color='white' />
                                </Button>) :
                                (<Button onClick={() => setEditable(true)} color='primary' variant='contained' >
                                    <FaEdit color='white' />
                                </Button>)
                        }
                        <Button onClick={handleRemoveTodo} color='error' variant='contained'>
                            <MdDelete color='white' />
                        </Button>
                    </Stack>
                </div>
            </Stack>
        </Paper>
    )
}

export default Todo