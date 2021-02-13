/* gallery *********************************************************/

document.querySelectorAll('ul.gallery.show').forEach(gallery => {

  const images = gallery.querySelectorAll('li > img');
  const controls = gallery.appendChild(document.createElement('aside'));

  [
    ['arrow-l', () => {
      const i = parseInt(gallery.getAttribute('data-index'));
      if (i > 0) { images[i-1].onclick() }
    }],
    ['arrow-r', () => {
      const i = parseInt(gallery.getAttribute('data-index'));
      if (i + 1 < images.length) { images[i+1].onclick() }
    }],
    ['x', () => { gallery.removeAttribute('style'); }]
  ].map(([name, callback]) => {
    const img = controls.appendChild(document.createElement('img'));
    img.setAttribute('src', `/img/icon/${name}.svg`);
    img.classList.add('gallery-control', name);
    img.onclick = callback;
    return img
  });

  images.forEach((image, i) => {
    image.onclick = () => {
      gallery.setAttribute('style', `--selected: url(${image.getAttribute('src')})`);
      gallery.setAttribute('data-index', i.toString());
      gallery.setAttribute('data-rev-index', (i - images.length).toString());
    }
  })
})

/* sidebar *********************************************************/

const respondents = [
  document.querySelector('.sidebar'),
  document.querySelector('.fixed.sonart'),
];

document.querySelector('.sidebar-overlay').onclick = () => {
  respondents.map(r => r.classList.remove('active'));
}
document.querySelector('.fixed.menu').onclick = () => {
  respondents.map(r => r.classList.add('active'));
}

