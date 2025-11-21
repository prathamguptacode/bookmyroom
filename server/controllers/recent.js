async function recent(req,res){
    try {
            const id=req.body?.id;
    if(!id){
        return res.status(400).json({message: 'enter valid data'})
    }
    const recentArr=req.cookies?.recent;
    if(!recentArr){
        res.cookie('recent',[id],{maxAge: 604800000})
        return res.json({message: 'success'})
    }
    recentArr.push(id)
    res.cookie('recent',recentArr,{maxAge: 604800000})
    return res.json({message: 'success'})
        
    } catch (error) {
        console.log(error.message)
        console.log('something went wrong in cookies')
        return res.status(500).json({message: 'something went wrong in cookies'})
    }
}
module.exports = recent