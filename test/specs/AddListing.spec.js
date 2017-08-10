var expect = require('chai').expect;
var LoginPage = require('../modules/Login');
var HomePage = require('../pageobjects/homepage.pageobjects');


 describe('Add Listing', function () {
   it('should able to add listing Successfully', function(){
           LoginPage.agentlogin();
           //this.timeout(5000);
           browser.timeoutsImplicitWait(500);
           HomePage.addlisting.click();
   });


 });
