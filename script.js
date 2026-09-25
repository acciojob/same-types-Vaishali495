function isSameType(val1, val2) {
  //your js code here
	// If both are NaN, they are considered the same type
  if (isNaN(val1) && isNaN(val2)) {
    return true;
  }
	// If only one is NaN, they are different types
  if (isNaN(val1) || isNaN(val2)) {
    return false;
  }

  // Check standard typeof for valid numbers/types
  return typeof val1 === typeof val2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
