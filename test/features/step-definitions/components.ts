import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^page is open$/, async function() {
console.log('component: input testing: page is opened')
await browser.url('https://the-internet.herokuapp.com/inputs')
//await browser.debug()
})

When(/^i perform action$/, async function(){
    console.log('component: input testing: perform action')

    let xpathInputSearch = await $('[type=number]')
    await xpathInputSearch.setValue('12345')
     await browser.pause(5000); 
    //await browser.keys("Enter")
   // await browser.pause(5000); 

}) 
