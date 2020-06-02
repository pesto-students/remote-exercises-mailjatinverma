const sleep = ms => {
  const p = new Promise(res => setTimeout(res, ms));
  const innerFn = value => {
    return p.then(() => value);
  };
  innerFn.then = p.then.bind(p);
  innerFn.catch = p.catch.bind(p);
  return innerFn;
};

export { sleep };
