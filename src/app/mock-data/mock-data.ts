
import { FootTraffic, User, Business } from './mock-classes';

export const HourlyStatistics: FootTraffic[] = [
    { id: "001", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 0 },
    { id: "001", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 20 },

    { id: "002", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 30 },
    { id: "002", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 40 },

    { id: "003", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 10 },
    { id: "003", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 20 },

    { id: "004", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 40 },
    { id: "004", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 30 },

    { id: "005", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 30 },
    { id: "005", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 20 },

    { id: "006", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 60 },
    { id: "006", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 10 },

    { id: "007", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 10 },
    { id: "007", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 30 },

    { id: "008", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 30 },
    { id: "008", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 40 },

    { id: "009", date: new Date(2017, 9, 17, 7, 0, 0), numberOfPeople: 0 },
    { id: "009", date: new Date(2017, 9, 17, 7, 30, 0), numberOfPeople: 20 },
]


export const Users: User[] = [
    { id: "ad01c", email: "admin@mail.com", password: "admin" },
    { id: "ad02b", email: "admin@mail.com", password: "admin" },
]

export const RegisteredBusinesses: Business[] = [
    { id: "ad02b", name: "Tester", lat: 0, lng: 0, maxCapacity: 60, currentPeople: 0 },
    { id: "001", name: 'Groote Schuur Hospital', lat: -33.9217137, lng: 18.46171849, maxCapacity: 60, currentPeople: 0 },
    { id: "002", name: 'Netcare UCT Private Academic Hospital', lat: -33.9423756, lng: 18.4632473, maxCapacity: 60, currentPeople: 0 },
    { id: "003", name: 'Life Vincent Pallotti Hospital', lat: -33.9443605, lng: 18.4900986, maxCapacity: 60, currentPeople: 0 },
    { id: "004", name: 'Nedbank Salt River Cape', lat: -33.931401, lng: 18.4550689, maxCapacity: 60, currentPeople: 0 },
    { id: "005", name: 'Nedbank Grand Central', lat: -33.923951, lng: 18.422884, maxCapacity: 60, currentPeople: 0 },
    { id: "006", name: 'Nedbank Foreshore', lat: -33.91724, lng: 18.4272859, maxCapacity: 60, currentPeople: 0 },
    { id: "007", name: 'Department of Home Affairs Cape Town', lat: -33.92765, lng: 18.4221, maxCapacity: 60, currentPeople: 0 },
    { id: "008", name: 'Department of Home Affairs Office', lat: -33.9012178, lng: 18.63154910000003, maxCapacity: 60, currentPeople: 0 },
    { id: "009", name: 'Home Affairs Wynberg District', lat: -34.0032484, lng: 18.4700239, maxCapacity: 60, currentPeople: 0 },
]
