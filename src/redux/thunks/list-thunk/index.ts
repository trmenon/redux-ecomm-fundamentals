import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemProps } from "../../../models";
import axios from 'axios';

const base_url : string = process.env['REACT_APP_API_BASE_URL']!;

export const fetchProducts = createAsyncThunk('/fetchProducts', async (_, {rejectWithValue}) => {
    const response = await axios.get(`${base_url}/products`);
    return response.data
})