function logger(req, res, next) {
    console.log(req.method);
    console.log(req.originalUrl);
    var time = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
    next()
}