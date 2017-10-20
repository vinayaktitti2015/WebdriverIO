var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.pageobjects.js');


var Login = function (){

  this.agentlogin = function(){
  LoginPage.open();
  LoginPage.username.setValue('test123');
  LoginPage.password.setValue('test123');
  LoginPage.submit();
  browser.waitForVisible('#locationBar');

  expect(LoginPage.dashboard.getText()).to.contain('Dashboard');

  }
}

module.exports = new Login();
