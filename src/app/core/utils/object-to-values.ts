export function objectToValues<T extends Readonly<unknown>>(obj: T): ReadonlyArray<T[keyof T]> {
  return Object.values(obj) as unknown as ReadonlyArray<T[keyof T]>;
}
