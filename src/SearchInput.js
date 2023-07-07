import KeywordHistory from './KeywordHistory.js';

class SearchInput {
  $wrapper = null;

  constructor({ $target }) {
    const $wrapper = document.createElement('section');
    $wrapper.className = 'SearchInputSection';
    this.$wrapper = $wrapper;

    $target.appendChild($wrapper);

    this.render();

    this.KeywordHistory = new KeywordHistory({
      $target: $wrapper,
    });
  }

  render() {
    this.$wrapper.innerHTML = `
        <div class='SearchInput-wrapper'>
                <a href='https://www.naver.com/'> 
                 <svg id='searchIcon' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z"/></svg>
                </a>
                <input class='SearchInput' type='text' placeholder='검색어를 입력하세요' />
        </div>
`;

    const wrapper = document.querySelector('.SearchInput-wrapper');
    const searchInput = document.querySelector('.SearchInput');
    const svg = document.querySelector('#searchIcon');

    searchInput.addEventListener('click', () => {
      svg.style.fill = '#34f830';
      wrapper.style.backgroundColor = 'hsla(0, 0%, 100%, 0.9)';

      const history = this.KeywordHistory.getHistory();

      if (history.length !== 0 && history !== null) {
        wrapper.style.backgroundColor = 'hsla(0, 0%, 100%, 0.9)';
        wrapper.style.borderRadius = ' 8px 8px 0px 0px';
        this.KeywordHistory.changeStyle(true);
      }
    });

    searchInput.addEventListener('blur', () => {
      svg.style.fill = 'white';
      wrapper.style.backgroundColor = 'hsla(0, 0%, 100%, 0.5)';
      wrapper.style.borderRadius = '8px';
      this.KeywordHistory.changeStyle(false);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value;
        const encodedQuery = encodeURIComponent(query);

        const searchUrl = `https://search.naver.com/search.naver?query=${encodedQuery}`;
        window.location.href = searchUrl;

        this.KeywordHistory.addKeyword(query);
      }
    });
  }
}

export default SearchInput;
