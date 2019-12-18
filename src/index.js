import './js/script';
import './scss/index.scss';
import './js/owl.carousel';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
console.log(images);








