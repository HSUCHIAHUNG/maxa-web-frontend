import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const HomePage = lazy(() => import("../pages/Home/Home"));
const ErrorPage = lazy(() => import("../pages/Error"));
const ParnerPage = lazy(() => import("../pages/Home/Parner"));
const MemberCenterPage = lazy(() => import("../layout/MemberLayout"));
const EditPasswordPage = lazy(() => import("../pages/Guest/EditPassword"));
const OrderPage = lazy(() => import("../pages/Order/Order"));
const ProductDetailPage = lazy(() => import("../pages/Order/ProductDetail"));
const CartPages = lazy(() => import("../pages/Cart"));
const OrderContentPage = lazy(() => import("../pages/OrderContent"));
const PaidOrderContentPage = lazy(() => import("../pages/PaidOrderContent"));
const SearchOrderPage = lazy(() => import("../pages/SearchOrder"));
const AccountPage = lazy(() => import("../pages/MemberCenter/Account"));
const CollectionPage = lazy(() => import("../pages/Collection"));
const DeleteAccountPage = lazy(() => import("../pages/DeleteAccount"));
const CreaditCardPage = lazy(() => import("../layout/CreaditCard"));
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
          <Suspense fallback={<Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        ),
      },
      // 合作夥伴
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <ParnerPage />
          </Suspense>
        ),
        path: "/parner/:id",
      },
      // 註冊登入(密碼更改)
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <EditPasswordPage />
          </Suspense>
        ),
        path: "/editPassword/:token",
      },
      // 行程產品
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <OrderPage />
          </Suspense>
        ),
        path: "/order",
      },
      // 行程產品細節
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <ProductDetailPage />
          </Suspense>
        ),
        path: "order/:id",
      },
      // 購物車
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <CartPages />
          </Suspense>
        ),
        path: "/cart",
      },
      // 訂單明細
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <OrderContentPage />
          </Suspense>
        ),
        path: "/orderContent/:id",
      },
      // 查詢訂單(非會員查詢)
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <SearchOrderPage />
          </Suspense>
        ),
        path: "/searchOrder",
      },
      // 收藏
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <CollectionPage />
          </Suspense>
        ),
        path: "/collection",
      },
      // 刪除帳號完成頁
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <DeleteAccountPage />
          </Suspense>
        ),
        path: "/deleteAccount",
      },
      // 支付完成頁面
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <PaidOrderContentPage />
          </Suspense>
        ),
        path: "/paidOrderContent/:id",
      },
    ],
  },
  // 會員中心
  {
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <MemberCenterPage />
      </Suspense>
    ),
    path: "/memberCenter",
    children: [
      // 帳號管理
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <AccountPage />
          </Suspense>
        ),
        path: "",
      },
      // 訂單管理
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <FrequentTravelersPage />
          </Suspense>
        ),
        path: "frequentTravelers",
      },
      // 常用旅客
      {
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <OrderManagementPage />
          </Suspense>
        ),
        path: "orderManagementPage",
      },
    ],
  },
  // 支付頁面
  {
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <CreaditCardPage />
      </Suspense>
    ),
    path: "/creaditCard/:id",
  },
];

const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
