const puppeteer = require('puppeteer');



console.log('before')

let openBrowser = puppeteer.launch({
    headless:false,
    defaultViewport:null
})

openBrowser.then(function(intense){
    let newtab = intense.newPage()
    return newtab;
}).then(function(newPromise){
    let linkweb = newPromise.goto('https://www.pepcoding.com/')
    return linkwebl
})

console.log('after')