const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request');

const cheerio = require('cheerio');

// const sofascore = 'https://www.sofascore.com/football/livescore'

let fulllink= 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'


request(fulllink,cb)


function cb(err,response,html){
    if(err){
        console.error('this getting error', err)
    }else{
        extract(html)
    }
}



function extract(html){

    let seltool = cheerio.load(html)

    let getlink = seltool('.ds-text-compact-xs.ds-font-medium');

    console.log(getlink)
}































// function extralink(html){
//     const seltool = cheerio.load(html);

//     let uclLink = seltool('.ds-block.ds-text-center.ds-uppercase.ds-text-ui-typo-primary.ds-underline-offset-4')
//     let link = uclLink.children()[0]
    
//     let viewall = link.children;
//     console.log(url+viewall.children)

    // getfullmatchlink(viewall)
// }

// function getfullmatchlink(uri){
//     request(uri,function(err,response,html){
//         if(err){
//             console.log(err)
//         }else {
//             console.log(html)
//         }
//     })
// }


// function extralink(html){
//     const seltool = cheerio.load(html);


//     let uclLink = seltool('.sc-900a42d5-0.hFHnOj a')
//     let link = uclLink.attr('href');

//     console.log(link)
// }
