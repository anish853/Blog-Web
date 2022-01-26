const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://dev-68276777.okta.com/oauth2/default',
    clientId: '0oa3hx4vaetmvlRhX5d7',
    redirectUri: window.location.origin + '/login/callback',
  };
  
  const oktaSignInConfig = {
    baseUrl: 'https://dev-68276777.okta.com',
    clientId: '0oa3hx4vaetmvlRhX5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'https://fthmb.tqn.com/OcjgnrjWn4R5mFg5HfCZv6hiLqo=/2891x1038/filters:fill(auto,1)/165942540-56a9f7525f9b58b7d0003d43.jpg',
    authParams: {
      // If your app is configured to use the Implicit flow
      // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
      // you will need to uncomment the below line
      // pkce: false
    }
    // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  };
  
  export { oktaAuthConfig, oktaSignInConfig };
  