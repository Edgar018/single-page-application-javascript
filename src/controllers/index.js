import home from './home.controller';
import posts from './posts.controller';
import notFound from './404.controller';

const pages = {
    home: home,
    posts: posts,
    notFound: notFound
}

export default pages;