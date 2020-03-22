export enum WarmehausKindType {
  Floors,
}

export type EnumKeysAsStringExtention<T> = keyof T;

export const propertyOf = <TObj>(name: keyof TObj) => name;
