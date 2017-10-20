function appcron(){
    //引入nightmare模块
    const Nightmare= require('nightmare');
    //实例化一个nightmare 
    const nightmare = Nightmare({ show: true });
    nightmare
    //打开网址
    .goto("http://www.zhaopin.com/")
    //输入

    .type("[name='loginname']","***********")
    .type("[name='Password']","*********")
    //点击事件（根据选择器）
    .click(".logbtn button")
    //等待
    .wait(2000)
    .goto("https://i.zhaopin.com/") 
    .wait(2000)
    .click("a.myLinkA.linkRefresh")
    .end()
    .wait(2000) 
    .catch((error) => {
        console.error('Search failed:', error);
    });
    console.log(11111);
}
//appcron()
module.exports.appcron = appcron;

