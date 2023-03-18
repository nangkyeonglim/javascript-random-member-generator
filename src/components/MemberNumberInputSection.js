import MemberNameInput from './MemberNameInput.js';
import randomGenerator from '../domain/randomGenerator.js';

const MemberNumberInputSection = {
  template() {
    return `
      <section id="member-number-section">
        <form id="team-number-form">
          <label id="team-number-label" for="team-number-input">팀 멤버는 몇명인가요?</label>
          <input id="team-number-input" name="team-number" type="number"/>
          <button id="team-number-button">클릭!</button>
        </form>
      </section>`;
  },

  setEvent() {
    const memberNumberSection = document.querySelector('#member-number-section');
    const teamNumberForm = document.querySelector('#team-number-form');

    teamNumberForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const number = new FormData(event.target).get('team-number');
      randomGenerator.setMemberNumber(number);
      memberNumberSection.insertAdjacentHTML('afterend', MemberNameInput.template(number));
      MemberNameInput.setEvent();
    });
  },
};

export default MemberNumberInputSection;
