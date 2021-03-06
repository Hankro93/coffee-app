const initState = {
    menu: [],
    orders:[]
}

 export const OrdReducer = (state = initState, action) => {
            switch (action.type) {
                case 'FETCH_MENU': {
                    return {
                        ...state,
                        menu:action.payload
                    
                        }
                    }
                    case 'POST_ORDER':
                    return {
                        ...state,
                       orderStatus: action.payload
                        }
                case 'ADD_ORDER':{
                    return {
                ...state,
               orders: [
              ...state.orders, {
            id: state.orders + 1,
          task: action.payload,
         done: false
       }
     ]
   }
 }
default:
return state
  }
}

export default OrdReducer