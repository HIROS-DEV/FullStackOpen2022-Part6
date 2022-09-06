import { useDispatch, useSelector } from 'react-redux';
import { addVoteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const Anecdote = () => {
	const anecdotes = useSelector((state) => state.anecdotes);

	const filterdAnecdotes =
		anecdotes.length >= 1 &&
		[...anecdotes].sort((a, b) => b.votes - a.votes);

	const dispatch = useDispatch();

	const vote = (anecdote) => {
		dispatch(addVoteAnecdote(anecdote));
		dispatch(showNotification(anecdote, 2));
	};

	if (anecdotes.length === 0) {
		return (
			<div>
				<p>no anecdote</p>
			</div>
		);
	}

	return filterdAnecdotes.map((anecdote) => (
		<div key={anecdote.id}>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={() => vote(anecdote)}>vote</button>
			</div>
		</div>
	));
};
export default Anecdote;
