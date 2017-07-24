function isGetter (obj, prop) {
  return !!Object.getOwnPropertyDescriptor(obj, prop)['get']
}

Usage:

obj = {
  foo: 'foo',
  get bar() { return 'bar' }
}

isGetter(obj, 'bar') // will return true
isGetter(obj, 'foo') // will return false