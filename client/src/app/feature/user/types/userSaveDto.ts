export type UserSaveDto = {
    _id? : string
    name : string,
    detail : string,
    age : number,
    created? : Date,
    hidden? : Boolean,

}

export function initialUserSave():UserSaveDto{
    return {
        name : '',
        detail : '',
        age : 0
    }
}