import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../src/Components/Pages/About';
import Footer from './Components/Footer';
import Pricing from './Components/Pages/Pricing';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import HireAssistant from './Components/Pages/HireAssistant';
import TermsAndConditions from './Components/Pages/TermsAndConditions';
import Manuscript from './Components/Pages/Manuscript';
import Insights from './Components/Pages/Insights';
import Industries from './Components/Pages/Industries';
import HelpGuide from './Components/Pages/HelpGuide';
import LiteratureReview from './Components/Pages/Literaturereview';
import PhdReasearch from './Components/Pages/PhdResearch';
import Research from './Components/Pages/Research';
import SampleWork from './Components/Pages/SampleWork';
import FAQ from './Components/Pages/FAQ';
import EditingServices from './Components/Pages/EditingServices';
import DataAnalysis from './Components/Pages/DataAnalysis';
import CustomerCare from './Components/Pages/CustomerCare';
import CourseWork from './Components/Pages/CourseWork';
import ContactUs from './Components/Pages/ContactUs';
import Courses from './Components/Pages/Courses';
import PhdDissertation from './Components/Pages/PhdDissertation';
import FloatingButton from './Components/FloatButton';
import Animation from './Components/Pages/Animation';
import AcademicLawWriting from './Components/Pages/AcademicLawWriting';
import ArtHumanities from './Components/Pages/ArtHumanities';
import MedicineHealthcare from './Components/Pages/MedicineHealthcare';
import BusinessManagement from './Components/Pages/BusinessManagement';
import EconomicsFinanceAcademic from './Components/Pages/EconomicsFinanceAcademic';
import ComputerScienceInformation from './Components/Pages/ComputerScienceInformation';
import EngineeringTechnology from './Components/Pages/EngineeringTechnology';
import BiologicalLifeScience from './Components/Pages/BiologicalLifeScience';
import Services from './Components/Pages/Services';
import OurProcess from './Components/Pages/OurProcess';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <FloatingButton/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About />} />
          <Route path ='/Pricing' element ={<Pricing />} />
          <Route path ='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path ='/HireAssistant' element={<HireAssistant/>} />
          <Route path ='/TermsAndConditions' element={<TermsAndConditions/>} />
          <Route path ='/ContactUs' element={<ContactUs />} />
          <Route path ='/Services/Courses' element={<Courses />} />
          <Route path ='/Services/Coursework' element={<CourseWork />} />
          <Route path ='/CustomerCare' element={<CustomerCare />} />
          <Route path ='/Services/DataAnalysis' element={<DataAnalysis />} />
          <Route path ='/Services/EditingServices' element={<EditingServices />} />
          <Route path ='/FAQ' element={<FAQ />} />
          <Route path ='/SampleWork' element={<SampleWork />} />
          <Route path ='/Research' element={<Research />} />
          <Route path ='/Services/PhdResearch' element={<PhdReasearch />} />
          <Route path ='/Services/LiteratureReview' element={<LiteratureReview />} />
          <Route path ='/HelpGuide' element={<HelpGuide />} />
          <Route path ='/Industries' element={<Industries />} />
          <Route path ='/Services/Manuscript' element={<Manuscript />} />
          <Route path ='/Insights' element={<Insights />} />
          <Route path ='/Services' element={<Services />} />
          <Route path ='/Services/PhdDissertation' element={<PhdDissertation />} />
          <Route path ='/Services/Animation' element={<Animation />} />
          <Route path ='/Industries/AcademicLawWriting' element={<AcademicLawWriting />} />
          <Route path ='/Industries/ArtHumanities' element={<ArtHumanities />} />
          <Route path ='/Industries/MedicineHealthcare' element={<MedicineHealthcare />} />
          <Route path ='/Industries/BusinessManagement' element={<BusinessManagement />} />
          <Route path ='/Industries/EconomicsFinanceAcademic' element={<EconomicsFinanceAcademic />} />
          <Route path ='/Industries/ComputerScienceInformation' element={<ComputerScienceInformation />} />
          <Route path ='/Industries/EngineeringTechnology' element={<EngineeringTechnology />} />
          <Route path ='/Industries/BiologicalLifeScience' element={<BiologicalLifeScience />} />
          <Route path ='/OurProcess' element={<OurProcess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
