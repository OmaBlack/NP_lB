
import TemplateHolder from './component/TemplateHolder/StartApplTemp';
import TemplateHolder2 from './component/TemplateHolder/InformationPageTemp';
import TemplateHolder3 from './component/TemplateHolder/FinancialPageTemp';
import TemplateHolder4 from './component/TemplateHolder/CalculateCreditTemp';
import TemplateHolder5 from './component/TemplateHolder/ApplicationSuccessfulTemp';
import ModalAlert from './component/Modals/ModalAlert';
import "./Styles/global.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ModalAlreadyExist from './component/Modals/ModalAlreadyExist';

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<TemplateHolder/>}/>
          <Route path='/getInstanceLoan' element={<TemplateHolder2/>}/>
          <Route path='/additionalInformation' element={<TemplateHolder3/>}/>
          <Route path='/calculateCredit' element={<TemplateHolder4/>}/>
          <Route path='/successful' element={<TemplateHolder5/>}/> 
          <Route path='/modalAlert' element={<ModalAlert/>}/>
          <Route path='/modalAlreadyExist' element={<ModalAlreadyExist/>}/>
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
