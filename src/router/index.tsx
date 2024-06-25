import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";

// 延遲載入函數
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 使用延遲載入的組件
const HomePage = lazy(() =>
  delay(500).then(() => import("../pages/Home/Home"))
);
const ErrorPage = lazy(() => delay(500).then(() => import("../pages/Error")));
const ParnerPage = lazy(() =>
  delay(500).then(() => import("../pages/Home/Parner"))
);
const MemberCenterPage = lazy(() =>
  delay(500).then(() => import("../layout/MemberLayout"))
);
const EditPasswordPage = lazy(() =>
  delay(500).then(() => import("../pages/Guest/EditPassword"))
);
const OrderPage = lazy(() =>
  delay(500).then(() => import("../pages/Order/Order"))
);
const ProductDetailPage = lazy(() =>
  delay(500).then(() => import("../pages/Order/ProductDetail"))
);
const CartPages = lazy(() => delay(500).then(() => import("../pages/Cart")));
const OrderContentPage = lazy(() =>
  delay(500).then(() => import("../pages/OrderContent"))
);
const PaidOrderContentPage = lazy(() =>
  delay(500).then(() => import("../pages/PaidOrderContent"))
);
const SearchOrderPage = lazy(() =>
  delay(500).then(() => import("../pages/SearchOrder"))
);
const AccountPage = lazy(() =>
  delay(500).then(() => import("../pages/MemberCenter/Account"))
);
const CollectionPage = lazy(() =>
  delay(500).then(() => import("../pages/Collection"))
);
const DeleteAccountPage = lazy(() =>
  delay(500).then(() => import("../pages/DeleteAccount"))
);
const CreaditCardPage = lazy(() =>
  delay(500).then(() => import("../layout/CreaditCard"))
);
const FrequentTravelersPage = lazy(() =>
  delay(500).then(() => import("../pages/MemberCenter/FrequentTravelers"))
);
const OrderManagementPage = lazy(() =>
  delay(500).then(() => import("../pages/MemberCenter/OrderManagement"))
);
const EmailValidPage = lazy(() =>
  delay(500).then(() => import("../pages/EmailValid"))
);
const PrivateRouterPage = lazy(() => import("./PrivateRouter"));

const routes = [
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <ErrorPage />
      </Suspense>
    ),
  },

  {
    path: "/",
    element: (
      <Suspense fallback={<Loading isLoading={true} />}>
        <PrivateRouterPage />
      </Suspense>
    ),
    children: [
      // 會員中心
      {
        path: "/memberCenter",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <MemberCenterPage />
          </Suspense>
        ),
        children: [
          // 帳號管理
          {
            path: "",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <AccountPage />
              </Suspense>
            ),
          },
          // 常用旅客
          {
            path: "frequentTravelers",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <FrequentTravelersPage />
              </Suspense>
            ),
          },
          // 訂單管理
          {
            path: "orderManagementPage",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <OrderManagementPage />
              </Suspense>
            ),
          },
        ],
      },
      // 支付頁面
      {
        path: "/creaditCard/:id",
        element: (
          <Suspense fallback={<Loading isLoading={true} />}>
            <CreaditCardPage />
          </Suspense>
        ),
      },
      // DefaultLayout
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          // 首頁
          {
            path: "/",
            meta: {
              requiresAuth: true,
            },
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <HomePage />
              </Suspense>
            ),
          },
          // 合作夥伴
          {
            path: "/parner/:id",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <ParnerPage />
              </Suspense>
            ),
          },
          // 註冊登入(密碼更改)
          {
            path: "/editPassword/:token",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <EditPasswordPage />
              </Suspense>
            ),
          },
          // 行程產品
          {
            path: "/order",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <OrderPage />
              </Suspense>
            ),
          },
          // 行程產品細節
          {
            path: "order/:id",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <ProductDetailPage />
              </Suspense>
            ),
          },
          // 購物車
          {
            path: "/cart",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <CartPages />
              </Suspense>
            ),
          },
          // 訂單明細
          {
            path: "/orderContent/:id",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <OrderContentPage />
              </Suspense>
            ),
          },
          // 查詢訂單(非會員查詢)
          {
            path: "/searchOrder",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <SearchOrderPage />
              </Suspense>
            ),
          },
          // 收藏
          {
            path: "/collection",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <CollectionPage />
              </Suspense>
            ),
          },
          // 刪除帳號完成頁
          {
            path: "/deleteAccount",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <DeleteAccountPage />
              </Suspense>
            ),
          },
          // 支付完成頁面
          {
            path: "/paidOrderContent/:id",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <PaidOrderContentPage />
              </Suspense>
            ),
          },
          // 信箱驗證頁面
          {
            path: "/emailValid",
            element: (
              <Suspense fallback={<Loading isLoading={true} />}>
                <EmailValidPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
