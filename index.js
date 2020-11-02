const didJWT = require('did-jwt')
const Resolver = require('did-resolver')
const ethrDid =  require('ethr-did-resolver').getResolver({
  networks: [
    { name: "rsk:testnet", registry: "0xdca7ef03e98e0dc2b855be647c39abe984fcf21b", rpcUrl: "https://did.testnet.rsk.co:4444" }
  ]
})

let resolver = new Resolver.Resolver(ethrDid)

let options = { resolver: resolver }

if (process.argv.length === 4) {
  options.audience = process.argv[3]
}

didJWT.verifyJWT(process.argv[2], options).then(console.log)
