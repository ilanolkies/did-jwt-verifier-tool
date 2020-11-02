<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>did-jwt-verifier-tool</code></h3>
<p align="middle">
  A simple tool to verify DID JWTs
</p>

## Features

- Verify JWTs signed by RSK Testnet DIDs

## Usage

1. Clone the repo

  ```
  git clone https://github.com/rsksmart/did-jwt-verifier-tool
  cd did-jwt-verifier-tool
  ```

2. Install dependencies

  ```
  npm i
  ```

3. Verify your JWTs!

**If the JWT has no `aud` use**

```
node index.js eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE2MDQzNTM4MDcsImV4cCI6MTk1NzQ2MzQyMSwibmFtZSI6IldlbGNvbWUgdG8gUklGIElkZW50aXR5ISIsImlzcyI6ImRpZDpldGhyOnJzazp0ZXN0bmV0OjB4ZjNiZWFjMzBjNDk4ZDllMjY4NjVmMzRmY2FhNTdkYmI5MzViMGQ3NCJ9.U3bCRrG4bibYh14jHAlxy8pnxfpwu1cWuUGFrVVMAWMubWpWv0ot2pKAfy8BMJCH5LE0Gfri7no4enZWM21KxQ
```

Expected result:

![no-aud](./img/no-aud.png)

**If the JWT has `aud` use**

```
node index.js eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE2MDQzNTM5NDgsImV4cCI6MTk1NzQ2MzQyMSwiYXVkIjoiZGlkOmV0aHI6cnNrOnRlc3RuZXQ6MHhmM2JlYWMzMGM0OThkOWUyNjg2NWYzNGZjYWE1N2RiYjkzNWIwZDc0IiwibmFtZSI6IldlbGNvbWUgdG8gUklGIElkZW50aXR5ISIsImlzcyI6ImRpZDpldGhyOnJzazp0ZXN0bmV0OjB4ZjNiZWFjMzBjNDk4ZDllMjY4NjVmMzRmY2FhNTdkYmI5MzViMGQ3NCJ9.nSakkO4HXhrB-sEPQvl-oxIpbhW36T990IYKiBsnec1ij7DKC_nD0kLDTF977_CVSOi6DlSJ18g9dIMm05qFMA did:ethr:rsk:testnet:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74
```

Expected result:

![yes aud](./img/yes-aud.png)

## Samples

Use `./sign-sample` to create one JWT with `aud`and another without:

```
node sign-sample.js
```

Expected result:

![sign](./img/sign.png)
