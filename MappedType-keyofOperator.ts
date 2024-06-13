import { Prettify } from "./Pretiffy";

interface Person{
    name:string;
    age:number;
}

type PersonKeys = Prettify< keyof Person>;


type NulllablePerson = {
    [K in PersonKeys] : Person[K] | null;
}

