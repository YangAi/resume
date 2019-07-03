export default [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          name: 'Home'
        }
      },
      {
        path: 'cover-letter',
        name: 'CoverLetter',
        component: () => import('@/views/CoverLetter'),
        meta: {
          name: 'Cover Letter'
          // hidden: true
        }
      },
      {
        path: 'resume',
        name: 'Resume',
        component: () => import('@/views/Resume'),
        meta: {
          name: 'Resume'
          // hidden: true
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About'),
        meta: {
          name: 'About this website'
        }
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth')
  },
  {
    path: '*',
    redirect: '/'
  }
]
