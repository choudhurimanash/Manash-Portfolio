import AboutPage from "./components/aboutPage";
import ContactPage from "./components/contactPage";
import SkillsPage from "./components/skillsPage";
import FooterPage from "./components/footerPage";
import HomePage from "./components/homePage";
import NavBar from "./components/navBar";
import ProjectsPage from "./components/projectsPage";
import SocialLinks from "./components/socialLinks";
import EducationPage from "./components/educationPage";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutPage />
      <EducationPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <FooterPage />

      <SocialLinks />
      
    </div>
  );
}

export default App;
