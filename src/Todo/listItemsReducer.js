const listItemsReducer = (state, action) => {
  switch (action.type) {
    case 'all':
      return action.listItems;
    case 'active':
      return action.listItems.filter(item => item.finished === false);
    case 'completed':
      return action.listItems.filter(item => item.finished === true);
    default:
  }
}

export { listItemsReducer };