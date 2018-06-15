import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render () {
		/* need to do this check because at app start, state is defined to be null but for Javascript, it is expecting an object. */
		if(!this.props.book) {
			return <div>Select a book to get started.</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div> Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

/* export the container */
export default connect(mapStateToProps)(BookDetail);