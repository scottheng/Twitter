const APIUtil = require("./api_util.js");

function UsersSearch(el) {
  console.log("el");
  this.$el = $(el);
  this.input = $(".user-input");
  this.$ul = $(".users");
  this.handleInput();
}

UsersSearch.prototype.handleInput = function () {
  this.input.on("input",(e) => {
    e.preventDefault();
    // console.log(e.target.value);
    APIUtil.searchUsers(e.target.value).then((res) => this.renderResults(res));

    // debugger
  });
  // this.input.on("keypress",(e) => {
  //   e.preventDefault();
    // APIUtil.searchUsers(this.input.val(), e);
  // });
};

UsersSearch.prototype.renderResults = function(res) {
  console.log(this.$ul);
  console.log(res);
  $(res).each( (i, user) => {
    let hrefTag = `/users/${user.id}`;
    this.$ul.append(`<li> <a href=${hrefTag}>${user.username}</a> </li>`);
    // $("a").attr("href", `/users/${user.id}`);
  });
};

module.exports = UsersSearch;
