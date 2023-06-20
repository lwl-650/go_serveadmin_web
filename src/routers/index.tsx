import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import type { MenuProps, MenuTheme } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  path: string,
  element: React.ReactNode,

  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',

): MenuItem {
  return {
    key,
    path,
    element,

    icon,
    children,
    label,
    type
  } as MenuItem;
}

// const items: MenuItem[] = [
//   getItem('Navigation One', 'sub1', <MailOutlined />, [
//     getItem('Option 1', '1'),
//     getItem('Option 2', '2'),
//     getItem('Option 3', '3'),
//     getItem('Option 4', '4'),
//   ]),

//   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//     getItem('Option 5', '5'),
//     getItem('Option 6', '6'),
//     getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//   ]),

//   getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//     getItem('Option 9', '9'),
//     getItem('Option 10', '10'),
//     getItem('Option 11', '11'),
//     getItem('Option 12', '12'),
//   ]),
// ];

// import AppLayout from '../AppLayout'
// import Detail from '../Detail'
// import Home from '../Home'
// import Login from '../Login'
// import User from '../User'

// 用懒加载实现优化
// const AppLayout = lazy(() => import('../AppLayout'));
const Detail = lazy(() => import('../pages/Detail'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const User = lazy(() => import('../pages/User'));

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
import AppLayout from './AppLayout';

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>
    {children}
  </Suspense>
}


// [
//   {
//     key: '1',
//     icon: <UserOutlined />,
//     label: 'nav 1',
//   },
//   {
//     key: '2',
//     icon: <VideoCameraOutlined />,
//     label: 'nav 2',
//   },
//   {
//     key: '3',
//     icon: <UploadOutlined />,
//     label: 'nav 3',
//   },
// ]

export const routers: MenuItem[] = [
  getItem('Option 1', '/', lazyLoad(<AppLayout />), 'sub1', <MailOutlined />),

  getItem('Navigation Two', '/c', lazyLoad(<Home />), 'sub2', <AppstoreOutlined />),

  getItem('Option 4', '/user/list', lazyLoad(<User />), 'suUser', <MailOutlined />, [
    getItem('Option 5', '/user/list/cc', lazyLoad(<User />), 'suUserdd'),
  ]),

  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   //路由嵌套，子路由的元素需使用<Outlet />

  //   children: [
  //     {
  //       index: true,
  //       path: '/',
  //       element: lazyLoad(<Home />),
  //       // key: '1',
  //       //       icon: <UserOutlined />,
  //       //       label: 'nav 1',
  //     },
  //     {
  //       path: '/user/list',
  //       element: lazyLoad(<User />),
  //       children: [{
  //         path: '/user/list/cc',
  //         element: lazyLoad(<User />)
  //       }]
  //     },
  //     {
  //       path: '/user/detail/:id',
  //       element: lazyLoad(<Detail />)
  //     }
  //   ]
  // },
  // {
  //   path: '/login',
  //   element: lazyLoad(<Login />)
  // }

]