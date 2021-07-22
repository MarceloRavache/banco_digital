export const getNameCard = (name) => {
    let nameSplit = name.split(' ');

    if(nameSplit.length > 3){
        if(nameSplit.length > 5){
            for(let i=1; i< nameSplit.length; i++){
                nameSplit[i] = nameSplit[i][0];
            }
        }else{
            for(let i=1; i< nameSplit.length-1; i++){
                nameSplit[i] = nameSplit[i][0];
            }
        }
    }
    let result_name = nameSplit[0];
    for(let i=1; i< nameSplit.length; i++){
        result_name = result_name + " " + nameSplit[i];
    }
    return result_name.toUpperCase();
}