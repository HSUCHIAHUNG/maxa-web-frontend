import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ErrorPage = lazy(() => import("../pages/Error"));
const ParnerPage = lazy(() => import("../pages/Home/Parner"));
const MemberCenterPage = lazy(() => import("../layout/MemberLayout"));
const EditPasswordPage = lazy(() => import("../pages/Guest/EditPassword"));
const OrderPage = lazy(() => import("../pages/Order/Order"));
const ProductDetailPage = lazy(() => import("../pages/Order/ProductDetail"));
const ContractPage = lazy(() => import("../pages/Order/Contract"));
const PassengerDataPage = lazy(() => import("../pages/Order/PassengerData"));
const CartPages = lazy(() => import("../pages/Cart"));
const OrderContentPage = lazy(() => import("../pages/OrderContent"));
const SearchOrderPage = lazy(() => import("../pages/SearchOrder"));
const AccountPage = lazy(() => import("../pages/MemberCenter/Account"));
const FrequentTravelersPage = lazy(
  () => import("../pages/MemberCenter/FrequentTravelers")
);
const OrderManagementPage = lazy(
  () => import("../pages/MemberCenter/OrderManagement")
);

const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      // 首頁
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      // 會員中心
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MemberCenterPage />
          </Suspense>
        ),
        path: "/memberCenter",
        children: [
          // 帳號管理
          {
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AccountPage />
              </Suspense>
            ),
            path: "",
          },
          // 訂單管理
          {
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FrequentTravelersPage />
              </Suspense>
            ),
            path: "frequentTravelers",
          },
          // 常用旅客
          {
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <OrderManagementPage />
              </Suspense>
            ),
            path: "orderManagementPage",
          },
        ],
      },
      // 合作夥伴
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ParnerPage />
          </Suspense>
        ),
        path: "/parner",
      },
      // 註冊登入(密碼更改)
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <EditPasswordPage />
          </Suspense>
        ),
        path: "/editPassword/:token",
      },
      // 行程產品
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderPage />
          </Suspense>
        ),
        path: "/order",
      },
      // 行程產品細節
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailPage />
          </Suspense>
        ),
        path: "order/:productDetail",
      },
      // 購買契約
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContractPage />
          </Suspense>
        ),
        path: "/contract",
      },
      // 乘客資料
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PassengerDataPage />
          </Suspense>
        ),
        path: "/passengerData",
      },
      // 購物車
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CartPages />
          </Suspense>
        ),
        path: "/cart",
      },
      // 訂單明細
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OrderContentPage />
          </Suspense>
        ),
        path: "/orderContent",
      },
      // 查詢訂單(非會員查詢)
      {
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SearchOrderPage />
          </Suspense>
        ),
        path: "/searchOrder",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
