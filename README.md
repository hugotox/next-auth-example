# Next Auth Example

Implements the authentication logic in the _app.js using cookies and Redux.

After user logs in, the user object is stored in redux so when user navigates
the app, the current user is globally available.

When logged in, if user refreshes the page, the _app.js will make one call
to "whoami" endpoint to identify the user using the cookies.

If you need a page to be public (like the login page) just declare the
static property `isPublic` and set its value to true:

```
static isPublic = true;
```
