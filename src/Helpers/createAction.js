export default function createAction({ type, payload }) {
    if(!type || !payload) {
        throw new Error("The correct parameters have not been supplied to createAction");
    }
    if(typeof type !== 'string' || !(type instanceof String)) {
        throw new Error("The type parameter must be a string");
    }
    return {
        type, 
        payload
    };
}