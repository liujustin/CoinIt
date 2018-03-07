// All configs to the Express server will be found here
module.exports =  {
    'secret': 'super secret passphrase', // Secret for JWT
    'database': 'mongodb://localhost:27017/coinit',
    'port': process.env.PORT || 8000
}
