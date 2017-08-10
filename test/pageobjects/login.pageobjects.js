
var Page = require('./Page')

var LoginPage = Object.create(Page, {

    // define elements
    username: {get: function() {return $('#txtUserName');}},
    password: {get: function() {return $('#txtPassword');}},
    loginbtn: {get: function() {return $('#btnLogin');}},
    dashboard: {get: function() {return $('#locationBar');}},

    //overwrite page methods
    open: {value: function(){
      Page.open.call(this, '/');
    }},

    submit: {value: function(){
      this.loginbtn.click();
    }}


});

module.exports = LoginPage;
