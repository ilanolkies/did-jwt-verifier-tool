const didJWT = require('did-jwt')
const signer = didJWT.SimpleSigner('278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f')


const payload = { exp: 1957463421, name: 'Welcome to RIF Identity!' }
const payloadWithAuth = { exp: 1957463421, name: 'Welcome to RIF Identity!', aud: 'did:ethr:rsk:testnet:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74' }

const options = { alg: 'ES256K', issuer: 'did:ethr:rsk:testnet:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74', signer }

Promise.all([
  didJWT.createJWT(payload, options).then(jwt => console.log('without aud', jwt)),
  didJWT.createJWT(payloadWithAuth, options).then(jwt => {
    console.log('with aud', jwt)
    console.log('aud', payloadWithAuth.aud)
  })
])
