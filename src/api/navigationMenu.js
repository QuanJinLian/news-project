
let initialMenu = [
    {
        id: 1,
        name:'Country',
        d_name : 'main.text.country',
        icon:'country',
        subMenu:[
            {
                s_name: 'main.text.korea',
                name: 'Korea',
                s_url: '/country/kr',
            },
            {
                s_name: 'main.text.china',
                name: 'China',
                s_url: '/country/cn',
            },
            {
                s_name: 'main.text.usa',
                name: 'USA',
                s_url: '/country/us',
            },
            {
                s_name: 'main.text.total',
                name: 'Total',
                s_url: '/country/total',
            },
        ]
    },
    {
        id: 2,
        name:'Category',
        d_name : 'main.text.category',
        icon:'category',
        subMenu:[
            {
                s_name: 'main.text.general',
                name: 'General',
                s_url: '/category/general',
            },
            {
                s_name: 'main.text.sports',
                name: 'Sports',
                s_url: '/category/sports',
            },
            {
                s_name: 'main.text.entertainment',
                name: 'Entertainment',
                s_url: '/category/entertainment',
            },
        ]
    }]

export default initialMenu;