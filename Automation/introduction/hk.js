

const puppeteer = require('puppeteer');


let page;
let email = 'palosev135@musezoo.com'
let password = 'gitbaba@786'
// let loginBtn = class["ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled"]
const loginLink = "https://www.hackerrank.com/auth/login";


let openBrowser = puppeteer.launch({
    headless:false,
   defaultViewport:null
})


openBrowser.then(function(instense){
    let tab = instense.newPage();
    return tab;
}).then(function(link){

    page = link;
    let weblink = link.goto(loginLink)
    return weblink;
}).then(function(){

    let emialPromise = page.type('input[id="input-1"]',email,{delay:50});
    return emialPromise

}).then(function(){
    let passPromise = page.type("input[id='input-2']",password,{delay:100})
    return passPromise;
}).then(function(){
    page.click("[class='ui-btn ui-btn-large ui-btn-primary auth-button ui-btn-styled']")}
    ).then(function(){
        //  waiting for page response
        let algoWillBeclickedPromise = waitAndclick('.topic-card a[data-analytics="SelectTopic"]',page)
        
        return algoWillBeclickedPromise;
    }).then(function(){
        let wampUpPromise = waitAndclick('input[value="warmup"]',page);
        // console.log(page)
        return wampUpPromise;
    }).then(function(){
        let challengesArray = page.$$('[class="ui-btn ui-btn-normal primary-cta ui-btn-line-primary ui-btn-styled"]');
        return challengesArray
       
    }).then(function(questionArr){
        console.log(questionArr.length);
        let questionSolved = 
    })





// it will wait for main page loading then select selector of the page  , cPage = main page
function waitAndclick(selector,cPage){

    // this promise function for waiting for main page so that selector would be selected
    return new Promise(function(resolve,reject){


        // this waitformadalPromise function select the selector after login function finished
        let waitFormodalPromise = cPage.waitForSelector(selector)


        // here we clicked the algorith section
        waitFormodalPromise.then(function(){

            let clickedModal = cPage.click(selector) // clicked
            return clickedModal;

        }).then(function(){
            resolve();
        }).catch(function(){
            reject();
        })
    })
}