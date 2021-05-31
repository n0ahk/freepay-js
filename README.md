# Freepay.js

Easily use the [Freepay](https://freepay.dk) API with JavaScript.

## Code Example

```
npm i freepay.js
```

```js
const Freepay = require("freepay.js").default;
const client = new Freepay("your-api-key-from-dashboard");

// Get authorization example
const authorization = client
  .getAuthorization("00000000-0000-0000-0000-000000000000")
  .then((response) => {
    // Do something with response.
  })
  .catch((error) => console.error(error));

// Or async
const authorization = await client.getAuthorization("00000000-0000-0000-0000-000000000000");
```

For other code examples check the [wiki](https://github.com/n0ahk/freepay-js/blob/main/WIKI.md).

## Tasks

- Paymentlink

## Done

- Get authorization information
- Void authorization
- Get authorization capture
- Get authorization captures
- Capture authorization
- Get authorization credit
- Get authorization credits
- Credit authorization
- Get information about recurring payment agreement
- Delete recurring payment agreement
- Make recurring authorization
