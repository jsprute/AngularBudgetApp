
export class Entity {

    private _id?: number;

    public constructor (
        id?: number
    ){
        if(id){
            this._id = id
        }
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(id: number | undefined) {
        this._id = id;
    }
}