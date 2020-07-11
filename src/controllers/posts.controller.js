import view from '../views/posts.html'

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const div = document.createElement('div');
    div.innerHTML = view;

    const listPosts = div.querySelector('#list-posts');
    let countPosts = div.querySelector('#count-posts');
    const posts = await getPost();
    countPosts.innerHTML = posts.length;

    posts.forEach(post => {
        listPosts.innerHTML += `
            <li>
                <h5>${post.title}</h5>
                <p>${post.body}</p>
            </li>
        `
    });

    return div;
}