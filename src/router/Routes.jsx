import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import RoleGuard from "./RoleGuard";
import MainLayout from "../Layout/MainLayout";

// Auth Pages
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgotPassword";
import VerifyOtp from "../Pages/Auth/VerifyOTP";
import SetNewPassword from "../Pages/Auth/SetNewPassword";
import Successful from "../Pages/Auth/Successful";
import GlobalNoRoute from "../Pages/Common/GlobalNoRoute";
import Signup from "../Pages/Auth/Signup";
import RoleSelection from "../Pages/Auth/RoleSelection";







export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <Login /> },
      // { path: "role-selection", element: <RoleSelection /> },
      { path: "signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgetPassword /> },
      { path: "verify-otp", element: <VerifyOtp /> },
      { path: "set-password", element: <SetNewPassword /> },
      { path: "successful", element: <Successful /> }
    ]
  },

  // Sales Rep Routes
  {
    path: "/golfer",
    element: <RoleGuard allowedRole="Golfer" />,
    children: [
      {
        element: <MainLayout />,
        children: [
          // { index: true, element: <Navigate to="home" replace /> },
          // { path: "home", element: <SalesRepHome /> },
          // {
          //   path: "clients",
          //   children: [
          //     { index: true, element: <Clients /> },
          //     { path: ":clientId", element: <ClientDetails /> },
          //   ],
          // },
          // { path: "add-call-log", element: <AddCallLog /> },
          // { path: "add-client", element: <AddClient /> },
          // { path: "quotes", element: <Quotes /> },
          // { path: "add-new-quote", element: <AddNewQuote /> },
          // { path: "quotes/:quoteId", element: <QuoteDetails /> },
          // { path: "jobs", element: <Jobs /> },
          // { path: "add-job", element: <AddNewJob /> },
          // { path: "jobs/:jobId", element: <JobDetailsPage /> },
          // { path: "jobs/:jobId/design-consultation", element: <DesignConsultation /> },
          // { path: "reports", element: <SalesReports /> },
          // { path: "mileage-log", element: <UserExpenses /> },
          // { path: "settings", element: <Settings /> },
          // { path: "*", element: <GlobalNoRoute /> },
        ],
      },
    ],
  },

  // Fallback
  { path: "*", element: <GlobalNoRoute /> },
]);

