import { BrowserRouter, Routes, Route } from "react-router";    {/* QUAN TRONG */}
import DefaultLayout from "./layouts/DefaultLayout";            {/* MAU */}
import HomePage from "./pages/HomePage";                        {/* MAU */}
import Blog from "./pages/Blog";                                {/* MAU */}
import ContactPage from "./pages/ContactPage";                  {/* MAU */}

function RenderChoApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>            {/* <div className={styles.logo}> <Link to="/">MyLogo</Link>  </div> */}
          <Route path="/" element={<HomePage />} />             {/* // */}
          <Route path="/blog" element={<Blog />} />             {/* path phai bang to "trong tep header.tsx" */}
          <Route path="/contact" element={<ContactPage />} />   {/* // */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RenderChoApp;