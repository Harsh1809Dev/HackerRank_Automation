const puppy = require("puppeteer");

let browser_promise = puppy.launch({
	headless: false,
});

const id = "rokom16875@dwgtcm.com";
const password = "ChapriNibba1234";

let tab;

browser_promise.then(function(browser){
	let pages_promise = browser.pages();
	return pages_promise;
}).then(function(pages){
	tab = pages[0];
	let pages_open_promise = tab.goto("https://www.hackerrank.com/auth/login");
	return pages_open_promise;
}).then(function(){
	let id_promise = tab.type("#input-1",id);
	return id_promise;
}).then(function(){
	let password_promise = tab.type("#input-2",password);
	return password_promise;
}).then(function(){
	let login_button_promise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
	return login_button_promise;
}).then(function(){
	let wait_promise = tab.waitForSelector("#base-card-1-link",{ visible: true});
	return wait_promise;
}).then(function(){
	let interview_preparation_kit_promise = tab.click("#base-card-1-link");
	return interview_preparation_kit_promise;
}).then(function(){
	let wait_promise = tab.waitForSelector("a[data-attr1='arrays']",{visible: true});
	return wait_promise;
}).then(function(){
	let arrays_promise = tab.click("a[data-attr1='arrays']");
	return arrays_promise;
}).catch(function(err){
	console.log("error occured");
});
	