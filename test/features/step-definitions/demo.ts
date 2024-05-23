import { Given,When, Then} from "@wdio/cucumber-framework";
import assert from 'assert';

Given(/^La pagina de Google se abrio$/,async function(){
    console.log('Antes de abrir el navegador....');
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log('Despues de abrir el navegador....');
})

When(/^Buscar con (.*)$/,async function(searchItem){
    console.log(`>>searchItem: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")

})
Then(/^Seleccionar en el primer resultado de busqueda$/, async function() {
    let elem = await $(`<h3>`)
    elem.click()
    await browser.pause(3000)
})

Then(/^La URL deberia de matchear con (.*)$/, async (expectedURL) => {
    console.log(`>>expectedURL: ${expectedURL}`);
    const currentURL = await browser.getUrl();
    assert.strictEqual(currentURL, expectedURL, `Expected URL to be ${expectedURL} but found ${currentURL}`);
});