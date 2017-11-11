export default function routes ($stateProvider)
{
    $stateProvider.state({
        name: 'list.detail',
        url: '/detail/:name',
        template: '<detail></detail>'
    });
};

routes.$inject = ['$stateProvider'];