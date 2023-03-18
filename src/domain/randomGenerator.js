import { CREW } from './data.js';
import { shuffle } from '../utils/index.js';

const randomGenerator = {
  memberNumber: 6, // 스터디원 수(default: 6)

  setMemberNumber(memberNumber) {
    this.memberNumber = memberNumber;
  },

  generate(studyMembers) {
    const shuffledCrew = shuffle(CREW.filter((member) => !studyMembers.includes(member)));

    return studyMembers.map((studyMember, index) => {
      const teamMembers = CREW.length / this.memberNumber - 1;
      const startLine = index * teamMembers;
      const endLine = startLine + teamMembers;

      const slicedCrews = shuffledCrew.slice(startLine, endLine);

      return {
        teamLeader: studyMember,
        teamMembers: slicedCrews,
      };
    });
  },
};

export default randomGenerator;
