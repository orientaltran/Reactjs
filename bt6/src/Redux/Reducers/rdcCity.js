import ActionType from "../ActionType";

const initialState = {
    lsCity: []
}

const rdcCity = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.city.SET_DATA:
            return {
                ...state,
                lsCity: payload
            }

        default:
            return state;
    }
}

export default rdcCity;