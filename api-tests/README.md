#API tests for Customers App

## Before start

### Please install

- nvm (https://github.com/nvm-sh/nvm)
- yarn


#### Before first run

- `nvm use`
- `yarn install`

#### Run tests

Currently the test could be run only form cypress test runner. I faced the issue with jest that I can rid off
`SyntaxError: Cannot use import statement outside a module`
Please open Test Runner by typing `yarn open` and then run the test from cypress.

#### User Accounts

To log into Sock Shop and complete a transaction, you'll need credentials.

| Username   | Password |
| ---------- | -------- |
| user       | password |
| user1      | password |
| Eve_Berger | eve      |