import { Prettify } from "./Pretiffy";

type name = string & number; //never;

type data =  {name:string} & {age: number};

type PretifiedRes = Prettify<data>;


interface Userdata{
    name:string;
    age: number;
}

interface PersonalInfo extends Userdata{
    contactNo: string;
}

type PretifiedPersonInfo = Prettify<PersonalInfo>;


class UserInfo implements Userdata{
    name:'';
    age:28;
}

type ISubjects = {English:string};
// type ISubjects = {Math:string}; -> Error Re-Declation Not Allowed in typescript


interface ISubjectsNew {
    English:string
}

interface ISubjectsNew {
    Math:string
}

const SubjectData: ISubjectsNew = {
    English:'',
    Math:''
}



