import { Checkbox, Form, Input } from "@arco-design/web-react";
import PhoneInput from "../../components/common/Form/PhoneInput";

function AccountPage() {
  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 編輯個人資料送出
  const editPersonalDataSubmit = (value: object) => {
    console.log(value);
  };

  return (
    <>
      {/* 主要資料區 */}
      <div
        className={`hidden xl:w-[800px] flex flex-col gap-[12px] md:gap-[20px]`}
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
            className={` self-end bg-[#3A57E8] rounded-[2px] text-[#fff] px-[16px] py-[3px] w-full md:w-fit md:py-[5px]`}
          >
            編輯資料
          </button>
        </ul>
        {/* 快速登入方式 */}
        <ul
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col md:border md:rounded-[16px] md:p-[40px] `}
        >
          <li className={`text-[16px] pb-[12px] md:pb-[20px] xl:text-[20px] `}>
            快速登入方式
          </li>
          <div className={`flex flex-col gap-[12px] md:gap-[20px] md:flex-row`}>
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
        {/* 修改密碼、刪除帳號 */}
        <ul
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
        >
          <li className={`text-[16px] xl:text-[20px] `}>修改密碼、刪除帳號</li>
          <div className={`flex flex-col gap-[12px] md:gap-[20px] md:flex-row`}>
            {/* 修改密碼 */}
            <li
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
            </li>
            {/* 刪除帳號 */}
            <li
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
            </li>
          </div>
        </ul>
      </div>
      {/* 編輯個人資料 */}
      <Form
        form={form}
        autoComplete="on"
        requiredSymbol={{ position: "start" }}
        layout="vertical"
        onSubmit={editPersonalDataSubmit}
        className={` flex flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] xl:flex-row-reverse `}
      >
        <div
          className={` w-full border border-[#E5E6EB] border-solid rounded-[16px] py-[20px] px-[16px] md:px-[40px] md:py-[40px] `}
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
            className={`h-[66px]`}
          >
            <Input placeholder="請填寫姓名" allowClear />
          </FormItem>
          {/* 身分證 */}
          <FormItem
            label="身分證或護照號碼"
            field="updateId"
            required
            className={`h-[66px]`}
          >
            <Input placeholder="請填寫身分證或護照號碼" allowClear />
          </FormItem>
          {/* 電話 */}
          <Form.Item
            label="電話"
            field="updatePhone"
            required
            className={`h-[66px]`}
          >
            <PhoneInput />
          </Form.Item>
          <FormItem
            field="updateNotify"
            required
            className={`w-auto mb-0`}
          >
            <Checkbox value="折扣通知" className={`p-0`}>
              接收活動、優惠碼、折扣通知
            </Checkbox>
          </FormItem>
          <div className={`flex gap-[8px] md:justify-end `}>
            <button
              type="button"
              className={` mt-[12px] px-[16px] py-[5px] w-[80px] text-[#4E5969] bg-[#F2F3F5] rounded-[2px] `}
            >
              取消
            </button>
            <button
              className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] rounded-[2px] md:w-fit `}
            >
              確認付款
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default AccountPage;
