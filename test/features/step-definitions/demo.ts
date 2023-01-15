import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){

    console.log("before opening browser...");
    await browser.url("https://www.google.com/")
    await browser.pause(1000)
    console.log("After opening browser...");
})
When(/^Search with (.*)$/, async function(searchitem) {
    console.log(`>> searchitem: ${searchitem}`);


    let ele = await $(`[name=q]`)
    await ele.setValue(searchitem)
    await browser.keys("Enter")


})

Then(/^Click on the first search result$/, async function () {
    let ele= await $(`<h3>`)
    await browser.execute("arguments[0].click();", ele);
    
    
    
})

Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
  console.log(`>> ExpectedUrl ${ExpectedUrl}`)
  let url=await browser.getUrl()
  chai.expect(url).to.equal(ExpectedUrl)  
})