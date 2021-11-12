

function writeCards(Name, surprise){
    let message = [];
    for (let i=0; i <Name.length; i++){
        message.push(`Thank you, ${Name[i]}, for the wonderful ${surprise} gift!`);
    }
    return message;
};

writeCards(message);


function countDown(i){
    while (i+1 > 0){
        console.log(i);
        i--;
    }
    
}