const BASE_URL = Cypress?.env?.('BASE_URL') || 'http://localhost:8080';

module.exports = {
    BASE_URL
};

