import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Thoughts = React.lazy(() => import("pages/Thoughts"));
const Taskmanagementdashboard = React.lazy(() =>
  import("pages/Taskmanagementdashboard"),
);
const Search = React.lazy(() => import("pages/Search"));
const SignupOne = React.lazy(() => import("pages/SignupOne"));
const Signup = React.lazy(() => import("pages/Signup"));
const Amigoprojectshowcaseplatform = React.lazy(() =>
  import("pages/Amigoprojectshowcaseplatform"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Amigoprojectshowcaseplatform />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupone" element={<SignupOne />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/taskmanagementdashboard"
            element={<Taskmanagementdashboard />}
          />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
