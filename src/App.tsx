import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Employees from "./pages/Employees";
import AddEmployeeLayout from "./layouts/AddEmployeeLayout";
import PersonalInformationForm from "./pages/AddEmployee/PersonalInformationForm";
import ProfessionalInformationForm from "./pages/AddEmployee/ProfessionalInformationForm";
import AccountAccessForm from "./pages/AddEmployee/AccountAccessForm";
import DocumentForm from "./pages/AddEmployee/DocumentForm";

import PersonalInformationDetail from "./pages/GeneralProfile/EmployeeProfile/PersonalInformationDetail";
import ProfessionalInformationDetail from "./pages/GeneralProfile/EmployeeProfile/ProfessionalInformationDetail";
import AccountAccessDetail from "./pages/GeneralProfile/EmployeeProfile/AccountAccessDetail";
import DocumentDetail from "./pages/GeneralProfile/EmployeeProfile/DocumentDetail";
import EmployeeGeneralProfile from "./layouts/EmployeeGeneralProfileLayout";
import EmployeeProfile from "./layouts/EmployeeProfileLayout";
import EmployeeAttendance from "./pages/GeneralProfile/EmployeeAttendance";
import EmployeeProjects from "./pages/GeneralProfile/EmployeeProjects";
import EmployeeLeave from "./pages/GeneralProfile/EmployeeLeave";
import Departments from "./pages/Departments";
import DesignDepartment from "./pages/Departments/DesignDepartment";
import SalesDepartment from "./pages/Departments/SalesDepartment";
import ProjectManagementDepartment from "./pages/Departments/ProjectManagementDepartment";
import MarketingDepartment from "./pages/Departments/MarketingDepartment";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import Holidays from "./pages/Holidays";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />

        <Route path="employees/add" element={<AddEmployeeLayout />}>
          <Route
            path="personalInformation"
            element={<PersonalInformationForm />}
          />
          <Route
            path="professionalInformation"
            element={<ProfessionalInformationForm />}
          />
          <Route path="accountAccess" element={<AccountAccessForm />} />
          <Route path="document" element={<DocumentForm />} />
        </Route>

        <Route path="employee/" element={<EmployeeGeneralProfile />}>
          <Route path="profile" element={<EmployeeProfile />}>
            <Route
              path="personalInformation"
              element={<PersonalInformationDetail />}
            />
            <Route
              path="professionalInformation"
              element={<ProfessionalInformationDetail />}
            />
            <Route path="accountAccess" element={<AccountAccessDetail />} />
            <Route path="document" element={<DocumentDetail />} />
          </Route>
          <Route path="attendance" element={<EmployeeAttendance />} />
          <Route path="projects" element={<EmployeeProjects />} />
          <Route path="leave" element={<EmployeeLeave />} />
        </Route>

        <Route path="departments" element={<Departments />} />
        <Route path="departments/design" element={<DesignDepartment />} />
        <Route path="departments/sales" element={<SalesDepartment />} />
        <Route
          path="departments/projectManager"
          element={<ProjectManagementDepartment />}
        />
        <Route path="departments/marketing" element={<MarketingDepartment />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="payroll" element={<Payroll />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="holidays" element={<Holidays />} />
        <Route path="settings" element={<Settings />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
