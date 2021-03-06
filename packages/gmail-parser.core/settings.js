const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

const config = convict({
    google: {
        token_path: {
            desc: 'Path to an OAuth2 \'Auth Token\'',
            default: './token.json',
            format: 'String',
            env: 'OAUTH_TOKEN_PATH',
        },
        credentials_path: {
            desc: 'Path to an Service Credentials',
            default: './credentials.json',
            format: 'String',
            env: 'GOOGLE_CREDENTIALS_PATH',
        },
    },
});


const getGoogleConfig = () => config.get('google');

module.exports = {
    getGoogleConfig,
};
