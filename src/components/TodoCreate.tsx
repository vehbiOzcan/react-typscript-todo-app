import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Paper, Typography } from '@mui/material';
import { LuListTodo } from "react-icons/lu";
import { IoMdCreate } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { TodoType } from '../types/Types';
import { addTodo } from '../redux/todoSlice';


function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Bir Todo giriniz !")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(addTodo(payload))
        setNewTodo('')
    }

    return (
        <div style={{ marginTop: '40px' }}>
            <Paper sx={{ padding: '10px' }} >
                <Stack direction={'column'} spacing={2} >
                    <Typography variant='h5'>Todos</Typography>
                    <TextField
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setNewTodo(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LuListTodo size={24}/>
                                    </InputAdornment>
                                ),
                                placeholder: 'Todo Giriniz'
                            },
                        }}
                        variant="standard"
                    />
                    <Button onClick={handleCreateTodo} variant='contained' color='warning' startIcon={<IoMdCreate />}>Oluştur</Button>
                </Stack>
            </Paper>
        </div>
    )
}

export default TodoCreate