const initialState = {
    messages: []
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'ADD_MESSAGE':
            const newMsg = state.messages.concat(action.payload)
            return {
                ...state,
                messages: newMsg
            }
            default:
                return state;
    }
}

export default reducer;