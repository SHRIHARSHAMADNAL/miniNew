const defaultState= {
    acNo:"",
    ifsc:""
}
const bankReducer = (state = defaultState,action) => {
    switch(action.type)
    {
        case "SAVEDATA":

            state.acNo = action?.payload?.acNo
            state.ifsc = action?.payload?.ifsc
            return {...state};
            default:
                return state;
    }
}
export default bankReducer;