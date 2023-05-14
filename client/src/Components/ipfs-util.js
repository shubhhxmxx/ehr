const https = require('https');

const projectId = '2PatJ6OxJI2YARSVLGt21teiYVN';
const projectSecret ='cdd669446aca920d20f7bb670fdb4c91';

const ipfs = require('ipfs-http-client');


const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfs.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});
