import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        // {
        //   path: "stats",
        //   element: <StatsLayout />,
        //   loader: statsLoader,
        //   children: [
        //     { index: true, element: <StatsPage /> },
        //     { path: "recent", element: <RecentPage /> },
        //     { path: "friends", element: <FriendsPage /> },
        //   ],
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
