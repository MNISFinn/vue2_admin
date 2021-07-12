import Order from "../views/Home/Order";
import UserList from "../views/User/UserList";

const dynamicRoutes = [
    {
        path: '/order',
        name: 'Order',
        meta: {name: 'Order'},
        children: [
            {
                path: '/order',
                name: 'Order',
                component: () => import('@/views/Home/Order.vue'),
                meta: { requiresAuth: true, name: "订单" },
            },
        ]
    },
    {
        path: '/userList',
        name: 'User',
        meta: {name: 'UserList'},
        children: [
            {
                path: '/userList',
                name: 'UserList',
                component: () => import('@/views/User/UserList.vue'),
                meta: { requiresAuth: true, name: "用户" },
            },
        ]
    },
];

export default dynamicRoutes
