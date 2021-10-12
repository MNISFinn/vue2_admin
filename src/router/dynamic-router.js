import CommonViews from "@/views/CommonViews";
// 订单管理
const OrderList = () => import('@/views/Order/OrderList')
const OrderInfo = () => import('@/views/Order/OrderInfo')
// 商品管理
const GoodsList = () => import('@/views/Goods/GoodsList')
// 用户管理
const UserList = () => import('@/views/User/UserList')
// 小区管理
const CommunityList = () => import('@/views/Community/CommunityList')

const dynamicRoutes = [
    {
        path: '/order',
        name: 'Order',
        component: CommonViews,
        meta: {name: '订单管理'},
        children: [
            {
                path: '/orderList',
                name: 'OrderList',
                component: OrderList,
                meta: { requiresAuth: true, name: "订单列表" },
            },
            {
                path: '/orderInfo',
                name: 'OrderInfo',
                component: OrderInfo,
                meta: { requiresAuth: true, name: "订单信息" },
            },
        ]
    },
    {
        path: '/goods',
        name: 'Goods',
        component: CommonViews,
        meta: {name: '商品管理'},
        children: [
            {
                path: '/goodsList',
                name: 'GoodsList',
                component: GoodsList,
                meta: { requiresAuth: true, name: "商品列表" },
            },
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: CommonViews,
        meta: {name: '用户管理'},
        children: [
            {
                path: '/userList',
                name: 'UserList',
                component: UserList,
                meta: { requiresAuth: true, name: "用户列表" },
            },
        ]
    },
    {
        path: '/community',
        name: 'Community',
        component: CommonViews,
        meta: {name: '小区管理'},
        children: [
            {
                path: '/communityList',
                name: 'CommunityList',
                component: CommunityList,
                meta: { requiresAuth: true, name: "小区列表" },
            },
        ]
    },
];

export default dynamicRoutes
