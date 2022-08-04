import Users from '../model/user'

export async function getUsers(req, res){
    try {
        const users = await Users.find({})

        if(!users) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}
export async function getUser(req, res){
    try {
        const { userid } = req.query;
        //   console.log("user",req.query);
        if(userid){
            const user = await Users.findById(userid);
            res.status(200).json(user)
        }
        else {
            res.status(404).json({ error : "User not Selected...!"});
        }
        
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!"})
    }
}
export async function postUser(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        Users.create( formData, function(err, data){
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

export async function putUser(req, res){
    try {
        const { userid } = req.query;
        const formData = req.body;

        if(userid && formData){
            const user = await Users.findByIdAndUpdate(userid, formData);
            res.status(200).json(user)
        }
        res.status(404).json( { error: "User Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}
export async function deleteUser(req, res){
    try {
        const { userid } = req.query;

        if(userid){
            const user = await Users.findByIdAndDelete(userid)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}