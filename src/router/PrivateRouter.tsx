import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../stores/index.ts";
import { authActions } from "../stores/auth.ts";
import { Message } from "@arco-design/web-react";

const PrivateRouter = () => {
  // 動態路由
  const navigate = useNavigate();

  // 目前路由
  const location = useLocation();

  // redux
  const dispatch = useAppDispatch();

  // 全域狀態auth
  const auth = useSelector((state: RootState) => state.auth.isMember);
  
  // 路由切換判斷
  useEffect(() => {
    // 白名單
    const whiteList = ["/memberCenter"];

    // 如果頁面需要會員權限跳轉到首頁跟登入視窗
    if (whiteList.some((path) => location.pathname.includes(path)) && !auth) {
      navigate("/");
      Message.info("尚未登入");
      dispatch(authActions.guestDialogToggle());
    }
  }, [location.pathname, navigate, auth, dispatch]);

  return <Outlet />;
};

export default PrivateRouter;
