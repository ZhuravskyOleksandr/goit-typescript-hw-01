function merge<T extends object, K extends object>(objA: T, objB: K): object {
  return Object.assign(objA, objB);
}
