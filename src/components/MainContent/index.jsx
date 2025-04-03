import PersonalInfos from "./PersonalInfos";
import ProjectsContainer from "../ProjectsContainer";
import SkillsContainer from "../SkillsContainer";
function MainContent() {
  return (
    <main className="px-8 py-12">
      <PersonalInfos />
      <ProjectsContainer />
      <SkillsContainer />
    </main>
  );
}

export default MainContent;
