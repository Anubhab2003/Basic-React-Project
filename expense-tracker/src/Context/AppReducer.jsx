export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            // Handle increment logic here
            return { ...state, 
                transactions:[action.payload,...state.transactions]
            };
        case 'DELETE_TRANSACTION':
            // Handle decrement logic here
            return { ...state, 
                transactions:state.transactions.filter(transaction => transaction.id!==action.payload)
            };
        // Add more cases as needed
        default:
            return state;
    }
};
