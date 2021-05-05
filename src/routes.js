const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: () => {
            return 'Homepage';
        }
    }
];
module.exports = routes;