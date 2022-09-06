import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterAnecdote(state, action) {
			const { anecdotes, inputs } = action.payload;
			const filterdAnecdotes = anecdotes.filter((anecdote) =>
				anecdote.content.includes(inputs)
            );
            return filterdAnecdotes;
		},
	},
});

export const { filterAnecdote } = filterSlice.actions;
export default filterSlice.reducer;
