import { connect } from 'react-redux';
import { filterAnecdote } from '../reducers/anecdoteReducer';

const Filter = (props) => {
	const handleChange = (event) => {
		const inputs = event.target.value;
		props.filterAnecdote({ inputs });
	};
	const style = {
		marginBottom: 10,
	};

	return (
		<div style={style}>
			filter <input onChange={handleChange} />
		</div>
	);
};

export default connect(null, { filterAnecdote })(Filter);
