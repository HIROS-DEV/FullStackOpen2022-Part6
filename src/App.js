import { useDispatch, connect } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { useEffect } from 'react';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeAnecdotes());
	}, [dispatch]);

	return (
		<div>
			<h2>Anecdotes</h2>
			{props.notification && <Notification />}
			<Filter />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		notification: state.notification,
	};
};

const ConnectedNotification = connect(mapStateToProps)(App);
export default ConnectedNotification;
