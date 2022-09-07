import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
let timerId;

const notificationReducer = createSlice({
	name: 'anecdotes',
	initialState,
	reducers: {
		notification(state, action) {
			if (action.payload.content) {
				const { content } = action.payload;
				const message = `You voted ${content}`;
				return (state = message);
			}
			const message = `You created ${action.payload}`;
			return (state = message);
		},
		addNotification(state, action) {
			const message = `You created ${action.payload}`;
			return (state = message);
		},
		clearNotification(state, _action) {
			return (state = '');
		},
	},
});

export const { notification, clearNotification, addNotification } =
	notificationReducer.actions;

export const showNotification = (anecdote, time) => {
	return async (dispatch) => {
		if (timerId) {
			clearTimeout(timerId);
		}

		dispatch(notification(anecdote));

		timerId = setTimeout(() => {
			dispatch(clearNotification());
		}, time * 2000);
	};
};

export default notificationReducer.reducer;
