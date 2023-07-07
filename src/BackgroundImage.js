class BackgroundImage {
  $wrapper = null;
  data = null;

  constructor({ $target, getBgImage }) {
    const $wrapper = document.createElement('div');
    $wrapper.className = 'Background-Image';
    this.$wrapper = $wrapper;

    $target.appendChild($wrapper);
    this.getBgImage = getBgImage;

    this.init();
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
  }

  init() {
    window.addEventListener('resize', () => {
      const bgUrl = this.getBgImage();

      this.setState({
        backgroundImage: bgUrl,
      });

      this.render();
    });

    const bgUrl = this.getBgImage();

    this.setState({
      backgroundImage: bgUrl,
    });
  }

  render() {
    this.$wrapper.innerHTML = `
                <img src=${this.data.backgroundImage} alt='배경 이미지'/>
            `;
  }
}
export default BackgroundImage;
