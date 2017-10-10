import { RegisteredBusinesses } from './mock-data';
import { Business } from './mock-classes';
import { Injectable } from '@angular/core';

@Injectable()
export class BusinessService{
    constructor(){}

    getBusinesses():Business[]{
        return RegisteredBusinesses;
    }

    getBusiness(id:string):Business{
        var businesses = RegisteredBusinesses;
        var selectedBusiness;
        for(var i = 0;i<businesses.length;i++){
            if(businesses[i].id===id){
                selectedBusiness =businesses[i];
            }
        }
        return selectedBusiness;
    }
}