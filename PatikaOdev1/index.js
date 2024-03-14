import getData from './app.js';

getData(1).then(({userPostInfo, userInfo})=> console.log(userInfo.data,"post:" ,userPostInfo.data))

