// router
import Routes from "./router";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./stores/index";
import Guest from "./pages/Guest/Guest";
// axios
// import axios from "axios";

/** @const 取得Guest頁面dilog開關狀態(全域狀態) */
function App() {
  // 取得dilog開關狀態(全域狀態)
  const isDialog = useSelector((state: RootState) => state.auth.isDialog);

  // 取得登入狀態(全域狀態)
  const auth = useSelector((state: RootState) => state.auth.isMember);

  // function print() {
  //   axios({
  //     method: "post",
  //     url: "/api/api.php",
  //     data: {
  //       action: "login",
  //       data: {
  //         member_account: "guest@test.com",
  //         member_passwd: "123456",
  //       },
  //     },
  //   });
  // }

  return (
    <>
      {/* <button onClick={print}>123</button> */}
      <Routes />
      {isDialog && !auth && <Guest />}
    </>
  );
}

export default App;
