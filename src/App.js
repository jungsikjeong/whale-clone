import BackgroundImage from './BackgroundImage.js';
import Clock from './Clock.js';
import Footer from './Footer.js';
import SearchInput from './SearchInput.js';
import randomBgImage from './utils/randomBgImage.js';

console.log('app is running!');

class App {
  $target = null;

  data = {
    backgroundImage: null,
  };

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({ $target });

    this.clock = new Clock({
      $target,
    });

    this.footer = new Footer({ $target });

    this.backgroundImage = new BackgroundImage({
      $target,
      getBgImage: () => {
        const bgUrl = randomBgImage();

        this.setState({
          backgroundImage: bgUrl,
        });

        window.addEventListener('resize', () => {
          const bgUrl = randomBgImage();
          this.setState({
            backgroundImage: bgUrl,
          });
        });

        return bgUrl;
      },
    });

    this.$FooterImageInfoElement = $target.children[3].children[0]; // Footer.ImageInfo 요소
    this.$BackgroundImageElement = $target.children[0];
    this.$SearchInputElement = $target.children[1];
    this.$ClockElement = $target.children[2];
    this.$FooterBgDarkElement = $target.children[3].children[1];

    this.bindEvent();
  }

  bindEvent() {
    this.$FooterImageInfoElement.addEventListener('mouseenter', () => {
      this.mouseEnterStyle();
    });
    this.$FooterImageInfoElement.addEventListener('mouseleave', () => {
      this.mouseLeaveStyle();
    });
  }

  mouseEnterStyle() {
    this.$BackgroundImageElement.style.backgroundColor = 'transparent';
    this.$BackgroundImageElement.style.transition = 'all 1.25s ease';
    this.$FooterBgDarkElement.style.background = 'transparent';
    this.$SearchInputElement.style.opacity = '0';
    this.$SearchInputElement.style.visibility = 'hidden';
    this.$ClockElement.style.opacity = '0';
    this.$ClockElement.style.visibility = 'hidden';
  }

  mouseLeaveStyle() {
    this.$BackgroundImageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    this.$BackgroundImageElement.style.transition = 'all 1.25s ease';
    this.$FooterBgDarkElement.style.background =
      'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6))';
    this.$SearchInputElement.style.opacity = '1';
    this.$SearchInputElement.style.visibility = 'visible';
    this.$ClockElement.style.opacity = '1';
    this.$ClockElement.style.visibility = 'visible';
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
  }
}

export default App;
