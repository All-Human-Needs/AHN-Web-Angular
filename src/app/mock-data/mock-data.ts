
import { FootTraffic, User,Business } from './mock-classes';

export const HourlyStatistics:FootTraffic[] = [
    {id:"ad02b",date: new Date(2017,9,17,7,0,0), numberOfPeople:0},
    {id:"ad02b",date: new Date(2017,9,17,7,30,0), numberOfPeople:20},
    {id:"ad02b",date: new Date(2017,9,17,8,0,0), numberOfPeople:50},
    {id:"ad02b",date: new Date(2017,9,17,8,30,0), numberOfPeople:10},
    {id:"ad02b",date: new Date(2017,9,17,9,0,0), numberOfPeople:60},
    {id:"ad02b",date: new Date(2017,9,17,17,0,0), numberOfPeople:0},
]

export const Users:User[] = [
    {id:"ad01c",email:"admin@mail.com",password:"admin"},
    {id:"ad02b",email:"admin@mail.com",password:"admin"},
]

export const RegisteredBusinesses:Business[] = [
    {id:"ad02b",name:"Tester",lat:0,lng:0,maxCapacity:60},
    {id:"",name:'Groote Schuur Hospital',lat: -33.9217137,lng: 18.46171849999996,maxCapacity:60}
]

// locations: location[] = [
//     {
//       lat: -33.9217137,
//       lng: 18.46171849999996,
//       name: 'Groote Schuur Hospital',
//     }, {
//       lat: -33.9423756,
//       lng: 18.463247300000035,
//       name: 'Netcare UCT Private Academic Hospital',
//     }, {
//       lat: -33.9443605,
//       lng: 18.49009860000001,
//       name: 'Life Vincent Pallotti Hospital',
//     }, {
//       lat: -33.931401,
//       lng: 18.45506899999998,
//       name: 'Nedbank Salt River Cape',
//     }, {
//       lat: -33.923951,
//       lng: 18.422884000000067,
//       name: 'Nedbank Grand Central',
//     },
//     {
//       lat: -33.91724,
//       lng: 18.42728599999998,
//       name: 'Nedbank Foreshore',
//     }, {
//       lat: -33.92765,
//       lng: 18.4221,
//       name: 'Department of Home Affairs Cape Town',
//     }, {
//       lat: -33.9012178,
//       lng: 18.63154910000003,
//       name: 'Department of Home Affairs Office',
//     }, {
//       lat: -34.0032484,
//       lng: 18.4700239,
//       name: 'Home Affairs Wynberg District',
//     }]