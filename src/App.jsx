import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';
import NewGoal from './Component/NewGoal';
import ForgotPassword from './Component/ForgotPassword'; 
import RejectionModal from './Component/RejectionModal'; 
import Milestone from './Component/MileStone';
import GoalDetail from './Component/GoalDetail';
import SubmitProof from './Component/SubmitProof';
import Notification from './Component/Notification';
import CancekConfirmation from './Component/CancelConfirmation';
import Setting from './Component/Setting';
import Account from './Component/Account';
// ← Add this

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-goal" element={<NewGoal />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/rejection" element={<RejectionModal />} />
        <Route path="/milestone/:id" element={<Milestone />} />
        <Route path="/goal-detail/:id" element={<GoalDetail />} />
        <Route path="/submit-proof/:goalId" element={<SubmitProof />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/cancelconfirmation" element={<CancekConfirmation />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/account" element={<Account />} />
         {/* ← Add this */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;