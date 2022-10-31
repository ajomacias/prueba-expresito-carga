import { Request as R, NextFunction as N } from "express";
import { AppResponse as Res } from "../../types";
import { User, UserSaveDto, UserUpdateDto } from ".";

export async function find (req :R, res : Res, next : N ){

    const id = req.params.id;

    if(!id) return next({status : 400, message : 'el id del usuario debe estar presente'});

    try{
        const user = await  User.findOne({ _id : id });

        if(!user) return next({ status : 404, message : 'user not found' });

        res.json({ success : true, data : user }).status(200)

    }catch(err){
        console.log(err);
        next({ status : 500, message : 'error inesperado' })

    }

}

export async function findAll (req :R, res : Res, next : N ){

    try{

        const users = await User.find();

        res.json({ success : true, data : users }).status(200);

    }catch(err){
        console.log(err);
        next({ status : 500, message : 'error inesperado' })
    }

    
}


export async function save (req :R, res : Res, next : N ){

    const user = req.body as UserSaveDto ;

    if(!user) return next({ status : 400, message : 'debe enviar los datos del usuario' });

    try{
        user.created = new Date();
        user.hidden = false;

        const newUser = await User.create(user);

        res.json({ success : true, data : newUser })

    }catch(err){
        console.log(err);
        next({ status : 500, message : 'error inesperado' });
    }

    

}

export async function update (req :R, res : Res, next : N ){

    const user = req.body as UserUpdateDto;

    if(!user) return next({ status : 400, message : 'debe enviar los datos del usuario' });

    if(!user._id) return next({ status : 400, message : 'la propiedad _id de estar presente' });

    try{

        const find = await User.findOne({ _id : user._id });

        if(!find) return next({ status : 404, message : 'user not found' });

        const updateUser = await User.findByIdAndUpdate(find, user);


        res.json({ success : true, data : updateUser });

    }catch(err){
        console.log(err);

        next({ status : 500, message : 'error inesperado' });
    }
    

}

export async function destroy (req :R, res : Res, next : N ){

    const id = req.params.id;
    

    if(!id) return next({ status : 400, message : 'el id del usuario debe estar presente' });

    try{
        const find = await User.findOne({ _id : id });

        if(!find) return next({ status : 404, message : 'user not found' })

        await User.deleteOne({ _id : id });
        
        res.json({ success : true }).status(200)
    }catch(err){
        console.log(err);

        next({ status : 500, message : 'error inesperado' });

    }

}

export async function search(req : R, res : Res, next : N) {

    const id = req.params.id;

    if(!id || id.length < 2 ) return next({ status : 400, message : 'el id debe tener como minimo 3 caracteres'})
    console.log(':DDD')
    try{
        const user = await User.find({_id:id });

        res.json({ success : true, data : [].push(user as never) }).status(200);

    }catch(err){
        console.log(err);
        return next({ status : 500, message : 'error inesperado' })
    }
    
}