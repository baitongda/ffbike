// analytic.js

if(process.client && process.env.NODE_ENV === 'production') {
  (function() {
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?0123456789ABCDEF0123456789ABCDEF';
    hm.id = 'baidu_tj';
    const hmc = document.getElementsByTagName('script')[0];
    hmc.parentNode.insertBefore(hm, hmc);
  })();
}

export default ({ app: { router } }) => {
  router.afterEach((to, form) => {
    _hmt.push(['_trackPageview', to.fullPath]);
  });
}
