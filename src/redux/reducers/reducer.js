
const INIT_STATE = {
    carts:[]
};

export const cartreducer = (state=INIT_STATE,action)=>{
console.log(action.payload,state.carts);

    switch(action.type){
         case "ADD_CART":
           const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
           console.log(IteamIndex);
           if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
           }     
           else{
            const temp = {...action.payload,qnty:1}
            return{
                    ...state,
                    carts:[...state.carts, temp]
            }
            
        }
            

        case "RMV_CART":
                const data = state.carts.filter((elm)=>elm.id!==action.payload);
                // console.log(data);
                return {
                    ...state,
                    carts:data
                }

        
        case "RMV_ONE":
           const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
           if(state.carts[IteamIndex_dec].qnty>=1){
                const dltitem = state.carts[IteamIndex_dec].qnty -= 1
                return {
                    ...state,
                    carts:[...state.carts]
                }
           }
           else if(state.carts[IteamIndex_dec].qnty === 1){
            const data = state.carts.filter((elm)=>elm.id !== action.payload);
            // console.log(data);
            return {
                ...state,
                carts:data
            }
           }


            default: return state
    }
}




