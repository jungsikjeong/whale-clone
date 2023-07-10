class Footer {
  $wrapper = null;

  constructor({ $target }) {
    const $wrapper = document.createElement('section');
    $wrapper.className = 'Footer';
    this.$wrapper = $wrapper;
    $target.appendChild($wrapper);

    this.render();
  }

  render() {
    this.$wrapper.innerHTML = `
      <div class='ImageInfo'>
        <div class='ImageInfo-image'>
          <img src='https://whale-store.pstatic.net/20180814_228/1534222230097nvOHY_JPEG/%C7%C1%B7%CE%C7%CA_small.jpg' alt='일러스트 이미지' />
        </div>
        <div class='ImageInfo-text'>
          <span class='ImageInfo-text-title'>일러스트레이터 '꼬닐리오'</span>
          <span class='ImageInfo-text-author'>Illustration by Coniglio</span>
        </div>
      </div>
      <div>
        
      </div>
      <div class='footer-bg-dark' />
    `;
  }
}

export default Footer;
