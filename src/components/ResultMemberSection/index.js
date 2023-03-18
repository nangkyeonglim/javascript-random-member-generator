import ResultMemberList from './ResultMemberList.js';

const ResultMemberListSection = {
  template(resultMembersList) {
    return `
      <section id="result-section">
        ${resultMembersList.map(({ teamMembers }) => ResultMemberList.template(teamMembers)).join('')}
      </section>
    `;
  },
};

export default ResultMemberListSection;
