import AboutPage from "./components/aboutPage";
import ContactPage from "./components/contactPage";
import SkillsPage from "./components/skillsPage";
import FooterPage from "./components/footerPage";
import NavBar from "./components/navBar";
import BannerPage from "./components/bannerPage";
import HomePage from "./components/homePage";
import ProjectsPage from "./components/projectsPage";
import SocialLinks from "./components/socialLinks";
import EducationPage from "./components/educationPage";


function App() {
  return (
    <div>
      <NavBar />
      <BannerPage />
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
