import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^google is open$/, async function() {
    console.log('i m opening the step definition')
await browser.url('https://www.google.com')
await (await $('#L2AGLb')).click()
//await browser.debug()
})

When(/^i enter (.*)$/, async function(searchkey){
    console.log('>> voici la valeur de searchKey: ${searchkey}')
    let xpathInputSearch = await $('[name=q]')
    await xpathInputSearch.setValue(searchkey)
    // await browser.pause(5000); 
    await browser.keys("Enter")
   // await browser.pause(5000); 

}) 
Then(/^click on the first link$/, async function(){
let xpathFirstLink = await $("#rso div:nth-child(1) h3")
await xpathFirstLink.click()
})

Then(/^Url should match (.*)$/, async function(expectedurl){
    let urlBRO = await browser.getUrl()
    chai.expect(urlBRO).to.equal(expectedurl)
})