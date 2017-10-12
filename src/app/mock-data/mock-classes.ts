export class FootTraffic{
    id:string;
    // lat: number;
    // lng: number;
    date : Date;
    numberOfPeople: number;
}

export class User{
    email:string;
    password:string;
    // isBusiness: boolean;
    id:string;
}

export class Business{
    id:string;
    name:string;
    lng:number;
    lat:number;
    maxCapacity:number;
    currentPeople:number;
}