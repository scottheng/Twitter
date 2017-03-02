const APIUtil = require("./api_util");

function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  console.log(this.userId);
  console.log(this);
  this.render();
  this.handleClick();
}

FollowToggle.prototype.render = function () {
  console.log("render test");
  if (this.followState === true) {
    this.$el.prop("disabled", false);
    console.log("following");
    this.$el.text("Unfollow");
  }
  else if (this.followState === false) {
    this.$el.prop("disabled", false);
    console.log("unfollowing");
    this.$el.text("Follow");
  }
  else {
    this.$el.prop("disabled", true);
  }
};

FollowToggle.prototype.handleClick = function () {
  $(".follow-toggle").on("click", e => {
    e.preventDefault();

    if (this.followState) {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId).then( res => {
        this.followState = false;
        this.render();
      });
    }
    else {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId).then( res => {
        this.followState = true;
        this.render();
      });
    }
  });


};


module.exports = FollowToggle;
