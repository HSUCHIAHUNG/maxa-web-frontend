import { Checkbox, Form, Input, Message, Modal } from "@arco-design/web-react";
import PhoneInput from "../../components/common/Form/PhoneInput";
import { useState } from "react";

function AccountPage() {
  // 編輯資料顯示狀態管理
  const [editData, setEditData] = useState("account");
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // 刪除帳號提交密碼確認(密碼驗證階段)
  function onOk() {
    form.validate().then((res) => {
      console.log(res);
      setConfirmLoading(true);
      setTimeout(() => {
        Message.success("驗證成功");
        setVisible(false);
        setConfirmLoading(false);
        setDeleteVisible(true);
      }, 1500);
    });
  }

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 編輯個人資料送出
  const editProfile = (value: object) => {
    Message.success("更改成功");
    setEditData("account");
    console.log(value);
  };

  // 修改密碼
  const editPasswordSubmit = (value: object) => {
    console.log(123);
    console.log(value);
    Message.success("更改成功");
    setEditData("account");
  };

  return (
    <>
      {/* 主要資料區 */}
      <div
        className={` xl:w-[800px] flex-col gap-[12px] md:gap-[20px] ${
          editData === "account" ? "flex" : "hidden"
        }`}
      >
        {/* 個人資料 */}
        <ul
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
        >
          <li className={`text-[16px] xl:text-[20px] `}>個人資料</li>
          <li
            className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
          >
            {/* 姓名 */}
            <div
              className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
            >
              <div
                className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
              >
                <p className={`w-[112px]`}>姓名</p>
              </div>
              <div
                className={`md:py-[9px] md:px-[20px] md:w-full  md:border-b md:border-solid md:border-[#E5E6EB]`}
              >
                <p className={``}>張三</p>
              </div>
            </div>
            {/* 信箱 */}
            <div
              className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
            >
              <div
                className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
              >
                <p className={`w-[112px] `}>信箱</p>
              </div>
              <div
                className={`md:py-[9px] md:px-[20px] md:w-full md:border-b md:border-solid md:border-[#E5E6EB]`}
              >
                <p className={``}>mia@chanjui.com</p>
              </div>
            </div>
            {/* 身分證或護照號碼 */}
            <div
              className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
            >
              <div
                className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
              >
                <p className={`w-[112px] `}>身分證或護照號碼</p>
              </div>
              <div
                className={`md:py-[9px] md:px-[20px] md:w-full md:border-b md:border-solid md:border-[#E5E6EB]`}
              >
                <p className={``}>------</p>
              </div>
            </div>
            {/* 電話 */}
            <div
              className={`py-[8px] px-[12px] border-b border-solid border-[#E5E6EB] md:p-0 md:flex `}
            >
              <div
                className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
              >
                <p className={`w-[112px] `}>電話</p>
              </div>
              <div
                className={`md:py-[9px] md:px-[20px] md:w-full md:border-b md:border-solid md:border-[#E5E6EB]`}
              >
                <p className={``}>(+886) 9123123</p>
              </div>
            </div>
            {/* 通知偏好 */}
            <div className={`py-[8px] px-[12px] md:p-0 md:flex `}>
              <div
                className={`text-[#86909C] md:border-r md:border-solid md:border-[#E5E6EB] md:bg-[#F7F8FA] md:py-[9px] md:px-[20px] `}
              >
                <p className={`w-[112px] `}>通知偏好</p>
              </div>
              <div
                className={`md:py-[9px] md:px-[20px] md:w-full md:border-b md:border-solid md:border-[#E5E6EB]`}
              >
                <p className={``}>我想接收活動、優惠碼、折扣通知</p>
              </div>
            </div>
          </li>
          <button
            onClick={() => setEditData("editProfile")}
            className={` self-end bg-[#3A57E8] rounded-[2px] text-[#fff] px-[16px] py-[3px] w-full md:w-fit md:py-[5px]`}
          >
            編輯資料
          </button>
        </ul>
        {/* 快速登入方式 - 暫時隱藏因為還沒辦法做第三方登入 */}
        {false && (
          <ul
            className={` bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col md:border md:rounded-[16px] md:p-[40px] `}
          >
            <li
              className={`text-[16px] pb-[12px] md:pb-[20px] xl:text-[20px] `}
            >
              快速登入方式
            </li>
            <div
              className={`flex flex-col gap-[12px] md:gap-[20px] md:flex-row`}
            >
              {/* google */}
              <li
                className={` w-full flex justify-between items-center p-[12px] border border-solid border-[#E5E6EB] rounded-[4px] md:p-[16px]`}
              >
                <div className={`flex items-center gap-[8px]`}>
                  <div
                    className={`bg-[#F2F3F5] p-[10px] w-[40px] h-[40px] rounded-[50%]`}
                  >
                    <span
                      className={`icon-[ri--google-fill] text-[#4E5969] w-[20px] h-[20px] `}
                    ></span>
                  </div>
                  <p>Google</p>
                </div>
                <div className={`flex gap-[12px] items-center text-[#3A57E8]`}>
                  <p>解除綁定</p>
                  <span
                    className={`icon-[gravity-ui--arrow-right] w-[15px] h-[15px]`}
                  ></span>
                </div>
              </li>
              {/* Line */}
              <li
                className={` w-full flex justify-between items-center p-[12px] border border-solid border-[#E5E6EB] rounded-[4px] md:p-[16px]`}
              >
                <div className={`flex items-center gap-[8px]`}>
                  <div
                    className={`bg-[#F2F3F5] p-[10px] w-[40px] h-[40px] rounded-[50%]`}
                  >
                    <span
                      className={`icon-[bi--line]  text-[#4E5969] w-[20px] h-[20px] `}
                    ></span>
                  </div>
                  <p>Line</p>
                </div>
                <div className={`flex gap-[12px] items-center text-[#3A57E8]`}>
                  <p>綁定</p>
                  <span
                    className={`icon-[gravity-ui--arrow-right] w-[15px] h-[15px]`}
                  ></span>
                </div>
              </li>
            </div>
          </ul>
        )}
        {/* 修改密碼、刪除帳號 */}
        <div
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
        >
          <div className={`text-[16px] xl:text-[20px] `}>
            修改密碼、刪除帳號
          </div>
          <div className={`flex flex-col gap-[12px] md:gap-[20px] md:flex-row`}>
            {/* 修改密碼 */}
            <button
              onClick={() => setEditData("editPassword")}
              className={` w-full flex justify-between items-center p-[12px] border border-solid border-[#E5E6EB] rounded-[4px] md:p-[16px]`}
            >
              <div className={`flex items-center gap-[8px]`}>
                <div
                  className={`bg-[#F2F3F5] p-[10px] w-[40px] h-[40px] rounded-[50%]`}
                >
                  <span
                    className={`icon-[solar--pen-bold-duotone] text-[#4E5969] w-[24px] h-[24px] `}
                  ></span>
                </div>
                <p>修改密碼</p>
              </div>

              <span
                className={`icon-[gravity-ui--arrow-right] text-[#1D2129] w-[15px] h-[15px]`}
              ></span>
            </button>
            {/* 刪除帳號 */}
            <button
              onClick={() => setVisible(true)}
              className={` w-full flex justify-between items-center p-[12px] border border-solid border-[#E5E6EB] rounded-[4px] md:p-[16px]`}
            >
              <div className={`flex items-center gap-[8px]`}>
                <div
                  className={`bg-[#F2F3F5] p-[10px] w-[40px] h-[40px] rounded-[50%]`}
                >
                  <span
                    className={`icon-[solar--trash-bin-trash-bold-duotone]  text-[#4E5969] w-[24px] h-[24px] `}
                  ></span>
                </div>
                <p>刪除帳號</p>
              </div>
              <span
                className={`icon-[gravity-ui--arrow-right] text-[#1D2129] w-[15px] h-[15px]`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* 編輯個人資料 */}
      {editData === "editProfile" && (
        <Form
          onSubmit={editProfile}
          form={form}
          autoComplete="on"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          className={` flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] xl:flex-row-reverse xl:w-[800px] ${
            editData === "editProfile" ? "flex" : "hidden"
          } `}
        >
          <div
            className={` w-full border-y border-[#E5E6EB] border-solid py-[20px] px-[16px] md:border md:rounded-[16px] md:px-[40px] md:py-[40px] `}
          >
            {/* 同步更新至會員中心選項 */}
            <div
              className={` flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
            >
              <p className={`text-[16px] md:text-[20px] `}>編輯個人資料</p>
            </div>
            {/* 姓名 */}
            <FormItem
              label="姓名"
              field="updateName"
              required
              rules={[{ required: true, message: "必填" }]}
            >
              <Input placeholder="請填寫姓名" allowClear />
            </FormItem>
            {/* 身分證 */}
            <FormItem
              label="身分證或護照號碼"
              field="updateId"
              required
              rules={[{ required: true, message: "必填" }]}
            >
              <Input placeholder="請填寫身分證或護照號碼" allowClear />
            </FormItem>
            {/* 電話 */}
            <Form.Item
              label="電話"
              field="updatePhone"
              required
              rules={[{ required: true, message: "必填" }]}
            >
              <PhoneInput />
            </Form.Item>
            <FormItem field="updateNotify" required className={``}>
              <Checkbox value="折扣通知" className={``}>
                接收活動、優惠碼、折扣通知
              </Checkbox>
            </FormItem>
            <div className={`flex gap-[8px] md:justify-end `}>
              <button
                onClick={() => setEditData("account")}
                type="button"
                className={` mt-[12px] px-[16px] py-[5px] w-[80px] text-[#4E5969] bg-[#F2F3F5] rounded-[2px] `}
              >
                取消
              </button>
              <button
                className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] rounded-[2px] md:w-fit `}
              >
                確認送出
              </button>
            </div>
          </div>
        </Form>
      )}

      {/* 修改密碼 */}
      {editData === "editPassword" && (
        <Form
          onSubmit={editPasswordSubmit}
          form={form}
          autoComplete="on"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          className={` flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] xl:flex-row-reverse xl:w-[800px] ${
            editData === "editPassword" ? "flex" : "hidden"
          } `}
        >
          <div
            className={` w-full border-y border-[#E5E6EB] border-solid py-[20px] px-[16px] md:border md:rounded-[16px] md:px-[40px] md:py-[40px] `}
          >
            {/* 同步更新至會員中心選項 */}
            <div
              className={` flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
            >
              <p className={`text-[16px] md:text-[20px] `}>修改密碼</p>
            </div>
            <FormItem
              label="舊密碼"
              field="oldPassword"
              required
              rules={[{ required: true, message: "必填" }]}
            >
              <Input.Password placeholder="請輸入舊密碼" autoComplete="on" />
            </FormItem>
            <FormItem
              label="新密碼"
              field="password"
              required
              rules={[{ required: true, message: "必填" }]}
            >
              <Input.Password placeholder="請輸入新密碼" autoComplete="on" />
            </FormItem>
            <FormItem
              label="確認新密碼"
              field="checkPassword"
              required
              rules={[
                {
                  validator: (v, cb) => {
                    if (!v) {
                      return cb("新密碼欄位為必填");
                    } else if (form.getFieldValue("password") !== v) {
                      return cb("新密碼不同");
                    }
                    cb(null);
                  },
                },
              ]}
            >
              <Input.Password placeholder="請確認新密碼" autoComplete="on" />
            </FormItem>
            <div className={`flex gap-[8px] md:justify-end `}>
              <button
                onClick={() => setEditData("account")}
                type="button"
                className={` mt-[12px] px-[16px] py-[5px] w-[80px] text-[#4E5969] bg-[#F2F3F5] rounded-[2px] `}
              >
                取消
              </button>
              <button
                className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] rounded-[2px] md:w-fit `}
              >
                確認送出
              </button>
            </div>
          </div>
        </Form>
      )}

      {/* 刪除帳號-驗證密碼 */}
      <Modal
        title="請輸入密碼以驗證MAXA帳號"
        visible={visible}
        okText="下一步"
        cancelText="取消"
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <Form
          {...formItemLayout}
          form={form}
          // labelCol={{
          //   style: { flexBasis: 90 },
          // }}
          wrapperCol={{
            style: { flexBasis: "100%" },
          }}
        >
          <FormItem
            field="confirmPassword"
            rules={[{ required: true, message: "必填" }]}
            className={`w-full`}
          >
            <Input.Password placeholder="請輸入舊密碼" autoComplete="on" />
          </FormItem>
        </Form>
      </Modal>

      {/* 刪除帳號-確定刪除帳號 */}
      <Modal
        title="是否確定要刪除MAXA帳號?"
        visible={deleteVisible}
        okText="取消"
        cancelText="確定刪除"
        onOk={() => setDeleteVisible(false)}
        okButtonProps={{
          style: { backgroundColor: 'red' },
        }}
        onCancel={() => setDeleteVisible(false)}
      >
        <p className={`pb-[4px]`}>
          1.
          提醒您，刪除帳號後，您將無法再以該帳號瀏覽及查詢先前的訂單紀錄，未使用的優惠券也會一併刪除，無法再補發或移轉。
        </p>
        <p className={`pb-[4px]`}>
          2.
          如您有尚未完成的訂單，為避免無法順利提供商品或服務給您，將拒絕刪除帳號的申請，並會請您等待至訂單完成後再申請刪除會員。
        </p>
        <p className={`pb-[4px]`}>
          3. 刪除會員申請通過後將於 XX
          個工作天內完整刪除所有個人資料。如對於作業期間或方式有任何問題，您可以直接洽example@chanjui.com詢問。
        </p>
      </Modal>
    </>
  );
}

export default AccountPage;
