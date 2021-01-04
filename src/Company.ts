import * as faker from 'faker/locale/en_IND';


export class Company {
    
    private _name : string;
    private _catchphrase : string;
    private _location : {
        lat : number,
        lng : number
    };
    
    constructor(){
        this._name = faker.company.companyName();
        this._catchphrase = faker.company.catchPhrase();
        this._location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        };
    }

    public getName() : string{
        return this._name;
    }

    public getCatchPhrase(): string {
        return this._catchphrase;
    }

    public getLocation(){
        return this._location;
    }
}