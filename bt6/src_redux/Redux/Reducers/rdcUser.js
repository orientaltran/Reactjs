const initialState = {
    // lsUser: [1, 2]
    lsUser: []
}

const rdcUser = (state = initialState, action) => {
    let {type, payload} = action
    switch (type) {
        case "ADD_USER":
            // ... spead in ES/JS
            return {
                lsUser: [...state.lsUser, payload]
            }
    
        default:
            return state;
    }
}

export default rdcUser
