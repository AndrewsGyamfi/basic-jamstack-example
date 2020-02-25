export const initialState = {
    name: '',
    email: '',
    subject: '',
    body: '',
    status: 'IDLE',
}

export const formReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'updateField':
            return ({
                ...state,
                [action.field]: action.value
            })
        case 'updateStatus':
            return ({
                ...state,
                status: action.value,
            })
        case 'reset':
        default: 
            return state;
    }
}