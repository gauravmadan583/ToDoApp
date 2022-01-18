const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                counter: state.counter+1
            }
        case 'DELETE_TASK':
            return {
                ...state, 
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state;
        
    }
}
export default AppReducer;