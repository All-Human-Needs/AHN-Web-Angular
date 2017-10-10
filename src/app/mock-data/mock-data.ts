
import { FootTraffic, User,Business } from './mock-classes';








export const hourlyStatistics:FootTraffic[] = [
    {id:"ad02b",date: new Date(2017,9,17,7,0,0), numberOfPeople:0},
    {id:"ad02b",date: new Date(2017,9,17,7,30,0), numberOfPeople:20},
    {id:"ad02b",date: new Date(2017,9,17,8,0,0), numberOfPeople:50},
    {id:"ad02b",date: new Date(2017,9,17,8,30,0), numberOfPeople:10},
    {id:"ad02b",date: new Date(2017,9,17,9,0,0), numberOfPeople:60},
    {id:"ad02b",date: new Date(2017,9,17,17,0,0), numberOfPeople:0},
]

export const users:User[] = [
    {id:"ad01c",email:"admin@mail.com",password:"admin"},
    {id:"ad02b",email:"admin@mail.com",password:"admin"},
]

export const registeredBusinesses:Business[] = [
    {id:"ad02b",name:"Tester",lat:0,lng:0,maxCapacity:60},
   
]

