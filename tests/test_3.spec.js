const { test } = require('../lambdatest-setup') 
const { expect } = require('@playwright/test') 


test.describe('PlayWright Vanilla JS - 3', () => { 
test('Scenario 3: Input Form Submit', async ({ page }) => { 
const messageAfterSubmission = "Thanks for contacting us, we will get back to you shortly."; // Locators 
const inputFormSubmit = page.locator("//a[normalize-space()='Input Form Submit']"); 
const submitButton = page.locator("//button[text()='Submit']"); 
const actualMessageAfterSubmission = page.locator("//p[@class='success-msg.hidden']"); 
const name = page.locator("input[name='name']"); 
const email = page.locator("#inputEmail4"); 
const password = page.locator("#inputPassword4"); 
const company = page.locator("#company"); 
const webSiteName = page.locator("#websitename"); 
const city = page.locator("#inputCity"); 
const address1 = page.locator("#inputAddress1"); 
const address2 = page.locator("#inputAddress2"); 
const state = page.locator("#inputState"); 
const zipCode = page.locator("#inputZip"); // Navigate to the Selenium Playground 
await page.goto('https://www.lambdatest.com/selenium-playground/'); 
console.log("Navigated to Selenium Playground"); // Click on the 'Input Form Submit' link 
await inputFormSubmit.click();
console.log("Clicked on 'Input Form Submit' link"); // Click submit without filling the form to check validation 
await submitButton.click(); 
console.log("Clicked submit button to check form validation"); 
page.on('dialog', async alert => { 
const text = alert.message(); 
console.log(text); 
expect(text).toBe('Please fill out this field.'); }); // Fill in the form fields 
console.log("Filling in the form fields..."); 
await name.fill("Ramesh"); 
await email.fill("r_ramesh@persistent.com"); 
await password.fill("admin@1234"); 
await company.fill("PSL"); 
await webSiteName.fill("website.com"); 
await page.selectOption("//select[@name='country']", { label: "United States" }); // Select by label 
await city.fill("Texas"); 
await address1.fill("1234 Main Street"); 
await address2.fill("Apartment 123"); 
await state.fill("Texas"); 
await zipCode.fill("500012"); // Submit the form 
await submitButton.click(); 
console.log("Submitted the form"); // Validate the success message “Thanks for contacting us, we will get back to you shortly.” on the screen 
const successMessage = page.locator('//p[@class="success-msg hidden"]'); 
await expect(successMessage).toHaveText('Thanks for contacting us, we will get back to you shortly.'); 
}) 
})
