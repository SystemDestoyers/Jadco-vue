// Import page components
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import EducationAndScholarship from './pages/services/EducationAndScholarship.vue';
import TrainingAndProfessionalDevelopment from './pages/services/TrainingAndProfessionalDevelopment.vue';
import AiAndAdvancedTechnologies from './pages/services/AiAndAdvancedTechnologies.vue';
import EgamingAndEsport from './pages/services/EgamingAndEsport.vue';
import ArtsAndEntertainment from './pages/services/ArtsAndEntertainment.vue';
import ScholarshipProgramsManagement from './pages/services/ScholarshipProgramsManagement.vue';
import StemEducation from './pages/services/StemEducation.vue';
import K12InternationalSchools from './pages/services/K12InternationalSchools.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/services/education-and-scholarship',
        name: 'services.education',
        component: EducationAndScholarship
    },
    {
        path: '/services/training-and-professional-development',
        name: 'services.training',
        component: TrainingAndProfessionalDevelopment
    },
    {
        path: '/services/ai-and-advanced-technologies',
        name: 'services.ai',
        component: AiAndAdvancedTechnologies
    },
    {
        path: '/services/egaming-and-esport',
        name: 'services.egaming',
        component: EgamingAndEsport
    },
    {
        path: '/services/arts-and-entertainment',
        name: 'services.arts',
        component: ArtsAndEntertainment
    },
    {
        path: '/services/scholarship-programs-management',
        name: 'services.scholarship',
        component: ScholarshipProgramsManagement
    },
    {
        path: '/services/stem-education',
        name: 'services.stem',
        component: StemEducation
    },
    {
        path: '/services/k12-international-schools',
        name: 'services.k12',
        component: K12InternationalSchools
    }
];

export default routes; 