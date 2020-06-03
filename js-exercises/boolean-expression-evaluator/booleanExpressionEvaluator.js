function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string') {
    throw Error('Type Error: expression must be string');
  }
  const tokens = expression.split(' ');
  const permittedTokens = ['true', 'false', '!true', '!false', '&', '|', '^'];
  for (let index = 0; index < tokens.length; index++) {
    if (permittedTokens.indexOf(tokens[index]) === -1) {
      throw Error('${tokens[index]} not permitted');
    }
  }
  const returnstrExpression = 'return '.concat(expression);
  const f = new Function(returnstrExpression);
  const value = f();
  if (value === 1 || value === true) {
    return true;
  }
  return false;
}

export { booleanExpressionEvaluator };
