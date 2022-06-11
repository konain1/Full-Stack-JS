const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request');

const cheerio = require('cheerio');


request(url,cb)


function cb(err,response,html){
    if(err){
        console.error('this getting error', err)
    }else{
        extract(html)
    }
}



function extract(html){

    let seltool = cheerio.load(html)

    let anchorElement = seltool('[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]')
    let link = anchorElement.attr('href');
    // console.log(link)
    let fulllLink ='https://www.espncricinfo.com'+link
    // console.log(fulllLink);

    getfullmatchlink(fulllLink);
}


function getfullmatchlink(uri){
    request(uri,function(err,res,html){
        if(err){
            console.log(err)
        }else{
            // console.log(uri)
            extractAllLink(html)
        }
    })


}

function extractAllLink(uri){
    let $ = cheerio.load(uri);
    let reportBlock = $(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent")
    console.log(reportBlock.length)
    for(let i = 0; i< reportBlock.length;i++){
        let spans = reportBlock[i].$('.ds-inline-flex.ds-items-center.ds-leading-none')
        console.log(spans.length)
 }

}

// this will not work website upgrated  scraping probhited

























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
