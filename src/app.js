import Header from './components/Header.js';
import MemberNameInput from './components/MemberNameInput.js';
import MemberNumberInputSection from './components/MemberNumberInputSection.js';
import ResultMemberListSection from './components/ResultMemberSection/index.js';
import randomGenerator from './domain/randomGenerator.js';

const mock = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
];

class App {
  #app;

  constructor() {
    this.#app = document.querySelector('body');
  }

  render() {
    /* html */
    this.#app.innerHTML = `

      ${Header.template()}
      <main>
        ${MemberNumberInputSection.template()}
      </main>
    `;

    this.setEvent();
  }

  setEvent() {
    MemberNumberInputSection.setEvent();
  }
}

export default App;
