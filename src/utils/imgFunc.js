
let rain = 'https://i.pinimg.com/originals/fd/8a/d7/fd8ad7132f5bff554291d65f9be17945.gif';
let sunImg = 'https://media1.giphy.com/media/sDkIHWOdD2RR9o8Ds3/giphy.gif?cid=790b76112f3474a56a30892259a749b484d65b39e761b3be&rid=giphy.gif&ct=s';
let cloud = 'https://media3.giphy.com/media/Swfwjo5DqCAF2NjSOm/giphy.gif?cid=ecf05e47d2av7wtyf9epfhmlytn7esatag4cru0vnerr53dg&rid=giphy.gif&ct=s';
let pureSun = 'https://media4.giphy.com/media/e874KtCXbiEqJ4SKqC/giphy.gif?cid=790b7611c6906511cf580fd548f57583d0a6daffaba5dfd1&rid=giphy.gif&ct=s';
let moonImg = 'https://media0.giphy.com/media/hHh3n3rkDK5IKfhycA/giphy.gif?cid=790b7611f42a28f3081c68f8fb807308cc6454c9bfeedf7f&rid=giphy.gif&ct=s';
let rainbow = 'https://media2.giphy.com/media/lodpzEh0fshEZWkoOg/giphy.gif?cid=ecf05e47sxh1ebrpm3vmxvdzn0rusyz9zuspx0k4u9dvwhm5&rid=giphy.gif&ct=s';
let thunderstorm = 'https://media1.giphy.com/media/XUQrufWHU1ThHweX89/giphy.gif?cid=ecf05e47k5xgdy41rofvpknv4vnqggi6bu7yrp9paotlmc63&rid=giphy.gif&ct=s'
let drizzle = 'https://media0.giphy.com/media/OrLOdiskqJEvMjy3Dm/giphy.gif?cid=ecf05e47vjsg6417aiwfh8pu4sni324g5c9ech7zlcz50399&rid=giphy.gif&ct=s'
let mist = 'https://media2.giphy.com/media/LWN4h7K3vcP3kZ0xZL/giphy.gif?cid=ecf05e477yr7nlh4dmvgvcheegx8ez2zumjncr4f31xlkuuf&rid=giphy.gif&ct=s'
let snow = 'https://media3.giphy.com/media/yYHiFiJb3iiIcHozYD/giphy.gif?cid=ecf05e47ncc0zc6glpgbyb756c8kptl3qgfgo79t0zrlztb7&rid=giphy.gif&ct=s://media2.giphy.com/media/FFlYCS8N8ccQOkAOeQ/giphy.gif?cid=ecf05e47dzg9dwsdpan75i2bghw76d4xd2whda2f3e0waz5e&rid=giphy.gif&ct=s'

let night = 'https://media0.giphy.com/media/5k9CAFz8huHmHITiIV/200w.webp?cid=ecf05e47whm41hquikju4j5ufa3t3lzqoloqooxoxi39ybc7&rid=200w.webp&ct=s'
let nightCloud = 'https://media1.giphy.com/media/MVxIkb6wjqm1gfwQdU/giphy.gif?cid=790b761191a3944b7cd4a12340a492f508ee9dd52f8861bf&rid=giphy.gif&ct=s'


let sunRiseSetFunc = (timezone, sunriseSec) => {
    let a =  +timezone + (new Date().getTimezoneOffset() * 60);
    let sunrise = (new Date(sunriseSec * 1000 + a * 1000))
    return sunrise;
}



export const iconWeather = (desc, timezone, sunrise, sunset, hour) => {
    let sunriseTime = sunRiseSetFunc(timezone, sunrise);
    let sunsetTime = sunRiseSetFunc(timezone, sunset);

    if(sunriseTime.getHours() < hour && sunsetTime.getHours() > hour) {
        let imgObjDay = {
            Rain: rain,
            Clear: pureSun,
            Clouds: cloud,
            Drizzle: drizzle,
            Mist: mist,
            Snow: snow,
            Thunderstorm: thunderstorm,
            other: pureSun
        }
        return imgObjDay[desc];
    }
    else {
        let imgObjNight = {
            Rain: rain,
            Clear: night,
            Clouds: nightCloud,
            Drizzle: drizzle,
            Mist: mist,
            Snow: snow,
            other: night
        }
        return imgObjNight[desc];
    }
    }

    