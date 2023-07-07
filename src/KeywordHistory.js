import uniqueArray from './utils/uniqueArray.js';

class KeywordHistory {
  KeywordHistory = null;
  data = null;

  constructor({ $target }) {
    const $KeywordHistory = document.createElement('ul');
    this.$KeywordHistory = $KeywordHistory;
    $KeywordHistory.className = 'KeywordHistory';
    $target.appendChild($KeywordHistory);

    this.init();
    this.render();
  }

  init() {
    this.setState(this.getHistory());
    this.render();
  }

  addKeyword(keyword) {
    let keywordHistory = this.getHistory();
    keywordHistory.unshift(keyword);
    keywordHistory = keywordHistory.slice(0, 5);
    keywordHistory = uniqueArray(keywordHistory);

    localStorage.setItem('keywordHistory', keywordHistory.join(','));
    this.init();
  }

  getHistory() {
    return localStorage.getItem('keywordHistory') === null
      ? []
      : localStorage.getItem('keywordHistory').split(',');
  }

  changeStyle(keyword) {
    if (keyword) {
      this.$KeywordHistory.style.visibility = 'visible';
    } else {
      this.$KeywordHistory.style.visibility = 'hidden';
    }
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render() {
    this.$KeywordHistory.innerHTML = this.data
      .map(
        (keyword) =>
          `
        <li class='KeywordHistory-item'>
            ${keyword}
        </li>
        `
      )
      .join('');
  }
}

export default KeywordHistory;
