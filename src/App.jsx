import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { UseExample1 } from "./components/useExample1";
import { UseExampleContext } from "./components/useExampleContext/Theme";
import { ActionExample1 } from "./components/actionExample1/Posts";
import { UseFormStatusExample } from "./components/useFormStatusExample/Posts";
import AddToCartForm from "./components/useFormStateExample/AddToCartForm";
import { UseOptimisticExample } from "./components/useOptimisticExample/Message";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="use-example-1" element={<UseExample1 />} />
        <Route path="use-example-context" element={<UseExampleContext />} />
        <Route path="action-example-1" element={<ActionExample1 />} />
        <Route
          path="useformstatus-example"
          element={<UseFormStatusExample />}
        />
        <Route
          path="useformstate-example"
          element={
            <>
              <AddToCartForm
                itemID="1"
                itemTitle="JavaScript: The Definitive Guide"
              />
              <AddToCartForm
                itemID="2"
                itemTitle="JavaScript: The Good Parts"
              />
            </>
          }
        />
        <Route
          path="useoptimistic-example"
          element={<UseOptimisticExample />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
