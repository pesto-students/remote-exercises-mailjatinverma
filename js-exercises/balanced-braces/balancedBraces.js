
function isParanthesis(char) {
  const str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  }
  return false;
}

function isOpenParanthesis(char) {
  const str = '([{';
  const position = str.indexOf(char);
  if (position > -1) { return position + 1; }
  return false;
}

function isClosedParanthesis(char) {
  const str = ')]}';
  const position = str.indexOf(char);
  if (position > -1) { return position + 1; }
  return false;
}

function balancedBraces(...args) {
  const stack = [];
  const largs = args[0].split('');
  for (let index = 0; index < largs.length; index++) {
    const token = largs[index];
    if (isParanthesis(token)) {
      const tokenisOpenParanthesis = isOpenParanthesis(token);
      if (tokenisOpenParanthesis) {
        stack.push(tokenisOpenParanthesis);
      }
      else {
        const tokenisClosedParanthesis = isClosedParanthesis(token);
        if (stack.length === 0) {
          return false;
        }// eo-if
        if (tokenisClosedParanthesis) {
          if (stack.pop() !== tokenisClosedParanthesis) {
            return false;
          }
        }
      }
    }
    // other than open-close paranthesis - do nothing!
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

export {
  balancedBraces,
};
