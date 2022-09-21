const pt = require('puppeteer');



(async ()=>{
    const browser = await pt.launch({headless:false,defaultViewport:null})
    const page = await browser.newPage();

    await page.goto('https://momentbyte.com/')

    // await page.screenshot({'./' : 'first.png' , fullPage:true})

    // await page.type('input[class="ytd-searchbox"]',{delay:50})

    await page.click('a[class="elementor-button-link elementor-button elementor-size-lg"]')

    setTimeout(() => {
        page.click('a[class="qlwapp-toggle"]')
    },5000 );

   

    
})();