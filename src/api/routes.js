import News from "../component/News/News";
import CountryPage from "../pages/CountryPage";
import CategoryPage from "../pages/CategoryPage";
import Total from "../pages/Total";

const routes = [
    {
        path: '/country',
        component: CountryPage,
        label: 'Country',
        routes : [
            {
                path: '/country/kr',
                component: News,
                label: 'KOREA',
                category: 'COUNTRY',
                query : 'kr'
            },
            {
                path: '/country/cn',
                component: News,
                label: 'CHINA',
                category: 'COUNTRY',
                query : 'cn'
            },
            {
                path: '/country/us',
                component: News,
                label: 'USA',
                category: 'COUNTRY',
                query : 'us'
            },
            {
                path: '/country/total',
                component: Total,
                label: 'Total',
                category: 'COUNTRY',
            }
        ]
    },
    {
        path: '/category',
        component: CategoryPage,
        label: 'Category',
        routes: [
            {
                path: '/category/general',
                component: News,
                label: 'GENERAL',
                category: 'CATEGORY',
                query : 'general'
            },
            {
                path: '/category/sports',
                component: News,
                label: 'SPORTS',
                category: 'CATEGORY',
                query : 'sports'
            },
            {
                path: '/category/entertainment',
                component: News,
                label: 'ENTERTAINMENT',
                category: 'CATEGORY',
                query : 'entertainment'
            }
        ]
    }
]

export default routes;