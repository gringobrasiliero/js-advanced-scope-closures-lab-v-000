

function produceDrivingRange(blockRange){
  return function(start, end) {
    result = blockRange - (parseInt(end) - parseInt(start));
    if (result < 0) {
      return `${Math.abs(result)} blocks out of range`;
    } else {
      return `within range by ${result}`;
    };
  };

};




function produceTipCalculator(percent) {
  return function(price){
    return price * percent;

  }
}