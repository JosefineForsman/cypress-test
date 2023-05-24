const initialState = {
    messages: [{
        text:'Här är ett test för att se om det fungerar',
        username: 'Nicole & Josefine'
    }
    ]
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