import Home from '~/component/pages/Home';
import Following from '~/component/pages/Following';
import Upload from '~/component/pages/Upload';
import { OnlyHeader } from '~/component/Layout';
import Search from '~/component/pages/Search';
// dùng cho các router ko cần đăng nhập vẫn vào đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: OnlyHeader },
    { path: '/search', component: Search, layout: null },
];

// dùng cho các router cần đang nhập ' có thể là khi đi vào nó sẻ lái qua trang login'
const privateRoutes = [];

export { privateRoutes, publicRoutes };
