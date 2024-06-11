interface IEmpData{
    name:string;
    address:string;
    contactNo:string;
    pincode?:string;
    email?:string;
}


type MakePropertiesRequired<T,K extends keyof T> = T & {[P in K]-?: T[P]};

type WithPincodeRequiredData = MakePropertiesRequired<IEmpData, 'pincode'>;


const empData: WithPincodeRequiredData = {
    name:'John',
    address:'Lorel Ipsum',
    contactNo:'0909090909',
    pincode:'122001'
}

