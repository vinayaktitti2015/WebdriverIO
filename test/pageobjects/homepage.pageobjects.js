
var Page = require("./Page");
var HomePage =Object.create(Page, {

  // define elements
  addlisting: {get: function() {return $("[src='/images/add_new_listing.png']");}},

  // listing pageobjects
  header1: {get: function() {return $(':header');}},
  propGrpType: {get: function() {return $('#ddlProGrpType');}},
  header2: {get: function() {return $(':header')[1];}},
  searchpropinput: {get: function() {return $('#txtSearchEstate');}},
  searchpropbtn: {get: function() {return $('#btnSearchEstate');}},
  proplist_header: {get: function() {return $('#jq-tabtitle');}},

  // prop list results
  listresults =  $$('.listing_estate_list li').filter(function(list){
    return list.isVisible();
  });

  selectresultlist: {get: function() { return $$('.btnSelect, .listing_estate_list')[1];}},

  header: {get: function() {return $(':header');}}
  header: {get: function() {return $(':header');}}
  header: {get: function() {return $(':header');}}
  header: {get: function() {return $(':header');}}

    open: {value: function(){
      Page.open.call(this, '/');
    }},

    clickAddlisting: { value: function(){
      this.addlisting.click();
    }}


});


module.exports =  HomePage;
