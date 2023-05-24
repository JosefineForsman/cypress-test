function addMessage(value){
    return{
        type: 'ADD_MESSAGE',
        payload: value
    }
}

export {addMessage}