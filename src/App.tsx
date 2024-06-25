// router
import Routes from "./router";
// redux
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./stores/index";
import { authActions } from "./stores/auth";
import Guest from "./pages/Guest/Guest";
// cookie
import { GET_COOKIES } from './utils/js-cookie'

function App() {
  // redux
  const dispatch = useAppDispatch();

  // 取得dilog開關狀態(全域狀態)
  const guestDialog = useSelector((state: RootState) => state.auth.guestDialog);

  // 取得登入狀態(全域狀態)
  const auth = useSelector((state: RootState) => state.auth.isMember);

  if (!auth) {
    const token = GET_COOKIES();
    if (token) {
      // TODO: 待增加token取得使用者資料的api，要確認token是否為有效的會員token
      dispatch(authActions.login({ token }));
    } else {
      dispatch(authActions.logout());
    }
  }

  return (
    <>
      {/* <button onClick={print}>123</button> */}
      <Routes />
      {guestDialog && !auth && <Guest />}
    </>
  );
}
export default App;
