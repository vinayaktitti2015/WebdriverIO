var webdriverio = require('webdriverio');

var options = {

  desiredCapabilities: {

    browserName: 'chrome'
  }
};

webdriverio.
          remote(options).init().url('http://www.newlaunch.iproperty.com.my')
             .getTitle().then(function(title){
                  console.log('Title was: ' + title);
                })
                .end();
