import randomGenerator from '../domain/randomGenerator';
import ResultMemberListSection from './ResultMemberSection';

const MemberNameInput = {
  template(number) {
    return `
    <div id="member-name-input">
      <p id="member-name-label"> 팀 멤버 이름 입력</p>
      <form id="member-name-form">
        ${Array.from({ length: number })
          .map(() => `<input type="text" name="name" class="team-member-name-input"/>`)
          .join('')}
          <button id="member-name-button">클릭!</button>
      </form>
    </div>`;
  },

  setEvent() {
    const memberNameForm = document.querySelector('#member-name-form');
    const memberNameInput = document.querySelector('#member-name-input');

    memberNameForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const value = [...new FormData(event.target)].map(([_, name]) => name);
      const result = randomGenerator.generate(value);
      console.log(result);
      memberNameForm.insertAdjacentHTML('afterend', ResultMemberListSection.template(result));
    });
  },
};

export default MemberNameInput;
