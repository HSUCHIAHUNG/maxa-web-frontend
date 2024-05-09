// router
import Routes from "./router";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./stores/index";
import Guest from "./pages/Guest/Guest";

/** @const 取得Guest頁面dilog開關狀態(全域狀態) */
function App() {
  /** @const 取得dilog開關狀態(全域狀態) */
  const isDialog = useSelector((state: RootState) => state.auth.isDialog);
  /** @const 取得登入狀態(全域狀態) */
  const auth = useSelector((state: RootState) => state.auth.isMember);


  return (
    <>
      <Routes />

      { (isDialog && !auth) && <Guest /> }
    </>
  );
}

export default App;
