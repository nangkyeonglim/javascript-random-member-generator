const ResultMemberList = {
  template(members) {
    return `
      <div class="result-member-container">
        ${members.map((member) => ResultMemberList.memberTemplate(member)).join('')}
      </div>
    `;
  },

  memberTemplate(name) {
    return `<div class="member">${name}</div>`;
  },
};

export default ResultMemberList;
