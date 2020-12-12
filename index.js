// Your code here
function mapToNegativize(array) {
  let newArray = [];
  for(const num of array) {
    newArray.push(num*(-1));
  }
  return newArray
}

function mapToNoChange(array) {
  return array
}

function mapToDouble(array) {
  let newArray = [];
  for(const num of array) {
    newArray.push(num*2)
  }
  return newArray
}

function mapToSquare(array) {
  let newArray = [];
  for(const num of array) {
    newArray.push(num**2)
  }
  return newArray
}

function reduceToTotal(array, start=0) {
  let total;

  if (start == 0) {
    total = 0;
  } else {
    total = start
  };

  for(const num of array) {
    total += num
  }
  return total;
}

function reduceToAllTrue(array) {
  let newArray = [];

  for(const num of array) {
    newArray.push(!!num)
  }

  let answer;

  for(let i = 0; i < newArray.length; i++) {
    if (newArray[i] == false) {
      answer = false
    } else {
      answer = true
    }
  }
  return answer;
}

function reduceToAnyTrue(array) {
  let newArray = [];

  for(const num of array) {
    newArray.push(!!num)
  }

  let answer = false;

  for(let i = 0; i < newArray.length; i++) {
    if (newArray[i] == true) {
      answer = true
    }
  }
  return answer;
}
