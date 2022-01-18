const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
                ...state, 
                tasks: state.tasks.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
        
    }
}
export default AppReducer;