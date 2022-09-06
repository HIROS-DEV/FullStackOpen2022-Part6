import { useDispatch } from 'react-redux';
import { showNotification } from '../reducers/notificationReducer';
import { createAnecdote } from '../reducers/anecdoteReducer';

const NewAnecdote = () => {
	const dispatch = useDispatch();

	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;

		dispatch(createAnecdote(content));
		dispatch(showNotification(content, 2));
		event.target.anecdote.value = '';
	};

	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='submit'>create</button>
			</form>
		</>
	);
};
export default NewAnecdote;
