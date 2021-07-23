export const getNumberUniqueRandom = (digits:number):string => {
    const concatenate = []
    for(let i = 0; i< digits; i++){
        concatenate.push(Math.floor(Math.random() * 10));
    }
    return concatenate.join('');
}