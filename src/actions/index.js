export function selectBook(book) {
	//console.log('A book has been selected:', book.title);
	/* selectBook is an action creator, it needs to create an object with a type property */
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}

/* action always contains a type (it is UPPERCASE) and sometimes a payload */