# Freepay.js wiki

See all the functions in action. All examples are shown with async, but you can do it with promises also.

```js
const Freepay = require("freepay.js").default;
const client = new Freepay("your-api-key-from-dashboard");
```

## Get authorization information

```js
const response = await client.getAuthorization("authorizationIdentifier");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Index
```

## Void authorization

```js
const response = await client.voidAuthorization("authorizationIdentifier");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Index
```

## Get authorization capture

```js
const response = await client.getAuthorizationCapture("authorizationIdentifier", "captureId");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_CaptureInfo
```

## Get authorization captures

```js
const response = await client.getAuthorizationCaptures("authorizationIdentifier");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Capture
```

## Capture authorization

```js
const response = await client.captureAuthorization("authorizationIdentifier", {
  Amount: 1000, // 10
});
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Capture
```

## Get authorization credit

```js
const response = await client.getAuthorizationCredit("authorizationIdentifier", "tokenId");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_CreditInfo
```

## Get authorization credits

```js
const response = await client.getAuthorizationCredits("authorizationIdentifier");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Credit
```

## Credit authorization

```js
const response = await client.creditAuthorization("authorizationIdentifier", {
  Amount: 1000, // 10,
  Comment: "Purchase", // optional
});
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Credit
```

## Get information about recurring payment agreement

```js
const response = await client.getRecurringPayment("tokenId");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Recurring
```

## Delete recurring payment agreement

```js
const response = await client.deleteRecurringPayment("tokenId");
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_Recurring
```

## Make recurring authorization

```js
const response = await client.makeAuthorization("tokenId", {
  Amount: 1000 // 10,
  OrderId: "1234",
  Currency: "DKK" // Optional, if not specified the payment will use the same currency as when the subscription was created.
});
// Response can be seen here: https://mw.freepay.dk/content/api.html#operation/Authorization_AuthorizeRecurring
```
