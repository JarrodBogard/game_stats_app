import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import StatsPage from "./pages/Stats";
import RecentPage from "./pages/Recent";
import SpecsPage from "./pages/Specs";
import FriendsPage from "./pages/Friends";
import RootLayout from "./components/RootLayout";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "stats",
          //   element: <StatsLayout />,
          //   loader: statsLoader,
          children: [
            { index: true, element: <StatsPage /> },
            { path: "recent", element: <RecentPage /> },
            { path: "specs", element: <SpecsPage /> },
            { path: "friends", element: <FriendsPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
