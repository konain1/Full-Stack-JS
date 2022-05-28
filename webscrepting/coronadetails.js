const request = require('request');

const cheerio = require('cheerio');

console.log('before');

request('https://www.worldometers.info/coronavirus/',cb);

function cb(error,response,html){
    if(error){
        console.log(error)
    }else {
        handleHtml(html);
    }
}

function handleHtml(html){

    let seltool = cheerio.load(html);

    let contentArr = seltool('.maincounter-number span');

    // let totalcases = seltool(contentArr[0]).text();

    // console.log(totalcases);

  for(let i = 0;i<contentArr.length;i++){
      let data = seltool(contentArr[i]).text();
      console.log(data);
  }


}


console.log('after');