import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState} from "../../store";
import { ItemProps } from "../../../models";
import axios from 'axios';

const base_url : string = process.env['REACT_APP_API_BASE_URL']!;

export const fetchProducts = createAsyncThunk('/fetchProducts', async (_, {rejectWithValue}) => {
        const response = await axios.get(`${base_url}/products`);
        return response.data
    },
    {
        condition: (_, { getState })=> {
            const state = getState() as RootState;
            const { timestamp } = state.list;
            const now = new Date();
            const elapsed = new Date(now.getTime() - 60 * 60 * 1000); // One hour ago
            return timestamp < elapsed;
        }
    }
);