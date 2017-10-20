var cronJob = require("cron").CronJob; 
var App=require("./app"); 
//每隔30秒执行一次，会在0秒和30秒处执行  
//var cron  = new cronJob('*/15 * * * * * ', function () {
    //console.log("开始执行定时更新任务");
    //App.appcron();
//}, null, true, 'Asia/Chongqing');  
//在每天的10点和18点的第30分钟各执行一次  
new cronJob('* 30 09,18 * * *', function () {  
    console.log("开始执行定时更新任务");
    App.appcron();
}, null, true, 'Asia/Chongqing'); 
