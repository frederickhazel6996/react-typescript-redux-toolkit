import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'http://localhost:3000/todos';

export const getTodos = createAsyncThunk('/todos/getTodos', async () => {
    const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
});
