import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdote';

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		appendAnecdote(state, action) {
			state.push(action.payload);
		},
		voteAnecdote(state, action) {
			const id = action.payload.id;
			const anecdoteToChange = state.find((a) => a.id === id);
			const changedAnecdote = {
				...anecdoteToChange,
				votes: anecdoteToChange.votes + 1,
			};

			return state.map((anecdote) =>
				anecdote.id !== id ? anecdote : changedAnecdote
			);
		},
		filterAnecdote(state, action) {
			const { inputs } = action.payload;
			const filterdAnecdotes = state.filter((anecdote) =>
				anecdote.content.includes(inputs)
			);
			return filterdAnecdotes;
		},
		setAnecdotes(_state, action) {
			return action.payload;
		},
	},
});

export const {
	voteAnecdote,
	filterAnecdote,
	setAnecdotes,
	appendAnecdote,
} = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll();
		dispatch(setAnecdotes(anecdotes));
	};
};

export const createAnecdote = (content) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.createNew(content);
		dispatch(appendAnecdote(newAnecdote));
	};
};

export const addVoteAnecdote = (anecdote) => {
	return async (dispatch) => {
		const updatedAnecdote = await anecdoteService.addVote(anecdote);
		dispatch(voteAnecdote(updatedAnecdote));
	};
};

export default anecdoteSlice.reducer;
