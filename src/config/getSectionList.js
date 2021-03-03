import Main from '../components/sections/Main';

import LuluRalaPlayingEnglish from '../components/sections/courses/LuluRalaPlayingEnglish';
import EducationalCourse from '../components/sections/courses/EducationalCourse';
import LuluRalaProgramGuide from '../components/sections/courses/LuluRalaProgramGuide';

import BrandStory from '../components/sections/whyLuluRala/BrandStory';
import PhilosophyOfEducation from '../components/sections/whyLuluRala/PhilosophyOfEducation';
import WhyLuluRala from '../components/sections/whyLuluRala/WhyLuluRala';

import FAQ from '../components/sections/content/FAQ';
import TuitionInformation from '../components/sections/content/TuitionInformation';
import RequestForConsultation from '../components/sections/content/RequestForConsultation';



function getSectionList() {
    const sectionList = new Map();
    sectionList.set("main", <Main />); 
    // courses
    sectionList.set("luluRalaPlayingEnglish", <LuluRalaPlayingEnglish />); 
    sectionList.set("educationalCourse", <EducationalCourse />); 
    sectionList.set("luluRalaProgramGuide", <LuluRalaProgramGuide />); 
    // why lulu rala
    sectionList.set("brandStory", <BrandStory />); 
    sectionList.set("philosophyOfEducation", <PhilosophyOfEducation />); 
    sectionList.set("whyLuluRala", <WhyLuluRala />);
    // content
    sectionList.set("FAQ", <FAQ />); 
    sectionList.set("tuitionInformation", <TuitionInformation />); 
    sectionList.set("requestForConsultation", <RequestForConsultation />); 

    return sectionList;
}

export default getSectionList;