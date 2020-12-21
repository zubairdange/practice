const initialstate={
    numOfCake:10
}

const CakeReducer=(state=initialstae ,Action)=>{
    switch(Action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake=state.numOfCake-1
        }
        default:return state
    }
}