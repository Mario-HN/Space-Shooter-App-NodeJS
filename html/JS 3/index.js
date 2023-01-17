function counter(start) {
    let count = start;
    return function() {
      return ++count;
    }
  }
  const incrementar = counter(10);
  console.log('Primeira chamada ' + incrementar());
  console.log('Segunda chamada ' + incrementar());
  console.log('Terceira chamada ' + incrementar());