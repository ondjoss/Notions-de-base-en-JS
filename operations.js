
let total = 0;

const addition = (nombre) =>{
    total += nombre;
    return nombre;
};

const soustraction = (nombre) =>{
    total -= nombre;
    return total;
};

const division = (nombre) =>{
    if(total === 0){
        return (total = nombre);
    }else{
        total /= nombre;
        return total;
    }
};

const multiplication = (nombre) =>{
    if(total === 0){
        return (total = nombre);
    }else{
        total *= nombre;
        return total;
    }
};

const reset = () =>{
    total = 0;
};