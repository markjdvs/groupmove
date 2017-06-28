module.exports = {
  // github: {
  //   loginURL: 'https://github.com/login/oauth/authorize',
  //   accessTokenURL: 'https://github.com/login/oauth/access_token',
  //   profileURL: 'https://api.github.com/user',
  //   // redirect_uri: 'http://localhost:7000/api/oauth/github',
  //   clientId: process.env.GITHUB_GROUPMOVE_ID,
  //   clientSecret: process.env.GITHUB_GROUPMOVE_SECRET,
  //   scope: 'user:email',
  //   getLoginUrl(){
  //     return `${this.loginURL}?client_id=${this.clientId}&scope=${this.scope}`;
  //   }
  // },

  facebook: {
    loginURL: 'https://www.facebook.com/v2.8/dialog/oauth',
    accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    profileURL: '#',
    clientId: process.env.GROUPMOVE_FB_CLIENT_ID,
    clientSecret: process.env.GROUPMOVE_FB_CLIENT_SECRET,
    scope: 'user:email'
  }
};
