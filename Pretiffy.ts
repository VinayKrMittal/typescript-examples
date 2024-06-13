/**
* @description :- to pretiffy types that extends another type
*/
export type Prettify<T> = {
 [K in keyof T]: T[K];
} & {};