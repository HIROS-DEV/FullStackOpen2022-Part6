import { useDispatch, connect} from 'react-redux';
import { addVoteAnecdote } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const Anecdote = (props) => {
	const filterdAnecdotes =
		props.anecdotes.length >= 1 &&
		[...props.anecdotes].sort((a, b) => b.votes - a.votes);

	const dispatch = useDispatch();

	const vote = (anecdote) => {
		dispatch(addVoteAnecdote(anecdote));
		dispatch(showNotification(anecdote, 2));
	};

	if (props.anecdotes.length === 0) {
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

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes
	}
}

const ConnectedAnecdote = connect(mapStateToProps)(Anecdote);
export default ConnectedAnecdote;
