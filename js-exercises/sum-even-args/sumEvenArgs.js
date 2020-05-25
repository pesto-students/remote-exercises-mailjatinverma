 const isEven = (number) => {
    return (number % 2 === 0);
 }

const sumEvenArgs = (...args) => {
    var sum = 0;
    for(var index=0; index<args.length; index++)
    {
        if(isEven(args[index])){ sum += args[index]};
    }
  return sum;
};

export { sumEvenArgs };
