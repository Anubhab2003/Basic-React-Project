export default (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // Handle increment logic here
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            // Handle decrement logic here
            return { ...state, count: state.count - 1 };
        // Add more cases as needed
        default:
            return state;
    }
};
