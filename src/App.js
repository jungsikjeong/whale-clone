import BackgroundImage from './BackgroundImage.js';
import Clock from './Clock.js';
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
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
  }
}

export default App;
