import views from '../views/home.html';

export default () => {
    const div = document.createElement('div');
    div.innerHTML = views;

    const btn = div.querySelector('#btn');
    btn.addEventListener('click', () => {
        console.log('Click');
    });

    return div;
};