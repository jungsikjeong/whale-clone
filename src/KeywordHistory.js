import uniqueArray from './utils/uniqueArray.js';

class KeywordHistory {
  KeywordHistory = null;
  data = {
    id: null,
    keyword: null,
  };

  constructor({ $target, searchResult }) {
    const $KeywordHistory = document.createElement('ul');
    this.$KeywordHistory = $KeywordHistory;
    $KeywordHistory.className = 'KeywordHistory';
    $target.appendChild($KeywordHistory);

    this.$searchInput = $target.children[0].children[1];
    this.searchResult = searchResult;

    this.init();
    this.render();
  }

  init() {
    this.setState(this.getHistory());
    this.render();
  }

  addKeyword(keyword) {
    let keywordHistory = this.getHistory();
    const newKeyword = {
      id: Date.now(), // 타임스탬프를 id로 사용
      keyword: keyword,
    };

    keywordHistory.unshift(newKeyword);
    keywordHistory = keywordHistory.slice(0, 5);
    keywordHistory = uniqueArray(keywordHistory);
    console.log(keywordHistory);

    localStorage.setItem('keywordHistory', JSON.stringify(keywordHistory));
    this.init();
  }

  removeKeyword(keywordId) {
    let keywordHistory = this.getHistory();

    keywordHistory = keywordHistory.filter((item) => {
      return item.id !== Number(keywordId);
    });

    localStorage.setItem('keywordHistory', JSON.stringify(keywordHistory));

    this.init();
  }

  getHistory() {
    return localStorage.getItem('keywordHistory') === null
      ? []
      : JSON.parse(localStorage.getItem('keywordHistory'));
  }

  changeStyle(keyword) {
    if (keyword) {
      this.$KeywordHistory.style.visibility = 'visible';
    } else {
      this.$KeywordHistory.style.visibility = 'hidden';
    }
  }

  changeSearchKeyword(keyword) {
    this.$searchInput.value = keyword.trim();
  }

  setState(nextData) {
    console.log(nextData);
    this.data = nextData;
    this.render();
  }

  render() {
    this.$KeywordHistory.innerHTML = this.data
      .map(
        (item) =>
          `
        <li class='KeywordHistory-item' data-id=${item.id}>
            <p>${item.keyword}</p> <button class='close-btn'>❌</button>
        </li>
        `
      )
      .join('');

    const $items = document.querySelectorAll('.KeywordHistory-item');

    $items.forEach((item) => {
      const keyword = item.textContent.trim().replace('❌', '');
      item.addEventListener('mouseenter', () =>
        this.changeSearchKeyword(keyword)
      );

      item.addEventListener('click', (e) => {
        const isKeywordItem = e.currentTarget.classList.contains(
          'KeywordHistory-item'
        );
        const isCloseButton = e.target.classList.contains('close-btn');
        const keyword = e.currentTarget.textContent.trim().replace('❌', '');
        const keywordId = e.currentTarget.dataset.id;

        if (isKeywordItem && !isCloseButton) {
          this.searchResult(keyword);
        }

        if (isCloseButton) {
          this.removeKeyword(keywordId);
        }
      });
    });
  }
}

export default KeywordHistory;
