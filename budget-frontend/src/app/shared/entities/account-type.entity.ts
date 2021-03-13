import { Entity } from "./entity";

export class AccountType extends Entity{

    public constructor (
        private _name: string,
        id?: number
    ){
        super(id);
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}