import React, { Component } from 'react'

/* the glue between react and redux since they are totally different libraries */
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

/* very important function here!!! */
function mapStateToProps(state) {
	/* what is returned will show up as props inside of BookList */
	return {
		books: state.books
	};
}

/* anything returned from this function will end up as props on the BookList container */
function mapDispatchToProps(dispatch) {
	/* whenever selectBook is called, result should be passed to all of our reducers */
	return bindActionCreators({ selectBook: selectBook }, dispatch)
	/* selectBook is a plain function that returns a plain javascript object. purpose of bindActionCreators and dispatch is to make sure we take what gets returned from selectBook function and make sure it flows through all the reducers. */
}

/* connect takes a function and a component and produces a container. Promote booklist from a component to a container - it needs to know about this new dispatch method, selectBook, Make it available as a prop. */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);