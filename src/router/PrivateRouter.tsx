import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../stores/index.ts";
import { authActions } from "../stores/auth.ts";
import { Message } from "@arco-design/web-react";

const PrivateRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const auth = useSelector((state: RootState) => state.auth.isMember);

  useEffect(() => {
    const whiteList = ["/memberCenter"];
    const tempVerifyList = ["/emailValid"];

    if (whiteList.some((path) => location.pathname.includes(path)) && !auth) {
      navigate("/");
      Message.info("尚未登入");
      dispatch(authActions.guestDialogToggle());
    }

    if (tempVerifyList.some((path) => location.pathname.includes(path))) {
      navigate("/");
    }

    // 設置計時器
    if (auth) {
      const timer = setTimeout(() => {
        Message.info("登入超時");
        navigate('/')
        dispatch(authActions.logout());
      }, 900000); // 15分钟 = 900000 毫秒

      // 清除計時器
      return () => {
        clearTimeout(timer);
      };
    }
  }, [location.pathname, navigate, auth, dispatch]); // 添加依赖以便在这些值变化时重新设置计时器

  return <Outlet />;
};

export default PrivateRouter;
