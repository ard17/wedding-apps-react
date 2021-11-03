const findCategoryById = (state, props) => {
	const category = state.categoryState.categories.filter(
		(v) => v.weca_id === props.action.id
	);
	console.log(props);
	return category;
};

export { findCategoryById };
