//@desc Get all health institutions
//@route GET /api/v1/health-institutions
//@access Public
exports.getHealthInstitutions = (req, res, next)=>{
    res.send(`Hello from world, from Aaron. The time is ${new Date()}`);
}