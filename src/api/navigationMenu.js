
let initialMenu = [
    {
        id: 1,
        name:'Country',
        d_name : 'main.text.country',
        icon:'country',
        subMenu:[
            {
                s_name: 'main.text.soul',
                s_url: 'soul',
            },
            {
                s_name: 'main.text.beijing',
                s_url: 'beijing',
            },
            {
                s_name: 'main.text.newyork',
                s_url: 'newyork',
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
                s_url: 'soul',
            },
            {
                s_name: 'main.text.business',
                s_url: 'beijing',
            },
            {
                s_name: 'main.text.entertainment',
                s_url: 'newyork',
            },
        ]
    }]

export default initialMenu;