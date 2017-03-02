const APIUtil = {
  followUser: id => {
     return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json',
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json',
    });
  },

  searchUsers: (queryVal) => {
    console.log('made it to the method');
    console.log(queryVal);
    return $.ajax({
      url: '/users/search',
      method: 'GET',
      dataType: 'json',
      data: {query: queryVal}
    });
  }
};

module.exports = APIUtil;
