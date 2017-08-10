var assert = require('assert');
var expect = require('chai').expect;

describe('webdriver.io page', function(){

     it('should have the right title', function(){
            browser.url('/');
            var title = browser.getTitle();
            assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');

     });

      xit('should be able to filter results', function(){
              browser.url('/api.html');

              // filter searchbar
              $('.searchbar input').setValue('getT');

              //get all filter results
              var results = $$('.commands.property a').filter(function (link){
                      return link.isVisible();
              });

              // assert no of results returned
              expect(results.length).to.be.equal(3);
              var linktext = $('.commands.property a');
              console.log("Total Results showing: " + linktext.getText());

              // click on second link GETTEXT
                for(var i=0; i < results.length; i++){
                   if(browser.getText(linktext[i]).equal('getText')){
                      linktext[i].click();
                 }
               }

              var element = $('#getText');
              expect(element.getText()).to.be.equal('GETTEXT');
              console.log('Header Text: ' + element.getText());

      });



      it('should able to get text', function(){
          browser.url('/api.html');

          // get title
          var element = $('.doc h1');
          console.log(element.getText());

      });

});
