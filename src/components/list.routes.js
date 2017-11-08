export default function routes ($stateProvider)
{
    $stateProvider.state({
        name: 'list',
        url: '/list',
        template: '<list></list>'
    });
};

routes.$inject = ['$stateProvider'];