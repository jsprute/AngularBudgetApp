import {AccountType} from './account-type.entity';
import { Entity } from './entity';

export class Account extends Entity{

    public constructor (
        private _name: string,
        private _accountType: AccountType,
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

    get accountType(): AccountType {
        return this._accountType;
    }

    set accountType(accountType: AccountType) {
        this._accountType = accountType;
    }

 }