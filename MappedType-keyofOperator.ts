import { Prettify } from "./Pretiffy";

interface Person{
    name:string;
    age:number;
}

type PersonKeys = Prettify< keyof Person>;


type NulllablePerson = {
    [K in PersonKeys] : Person[K] | null;
}

// with Generic

type MayBeNull<T> ={
    [k in keyof T]: T[k] | null;
    
}

