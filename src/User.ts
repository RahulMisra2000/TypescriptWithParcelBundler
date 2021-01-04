import * as faker from 'faker/locale/en_IND';


export class User {
    
    private _name : string;
    private _city : string;
    private _location : {
        lat : number,
        lng : number
    };
    
    constructor(){
        this._name = faker.name.lastName();
        this._city = faker.address.city();
        this._location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        };
    }

    public getName() : string{
        return this._name;
    }

    public getCity(): string {
        return this._city;
    }

    public getLocation(){
        return this._location;
    }
}