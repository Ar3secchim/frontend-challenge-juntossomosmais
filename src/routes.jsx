import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User } from "./pages/User/index.jsx";
import { DetailsUser } from "./pages/DetailsUser/index.jsx";
import { Footer } from "./components/footer/index.jsx";
import { NotFound } from "./pages/NotFounder/index.jsx";

function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<User />} />
          </Route>
          <Route path="users/:name" element={<DetailsUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}

export default AppRouter;
