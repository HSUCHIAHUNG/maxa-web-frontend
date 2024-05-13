// react原生方法
import React, { useState } from "react";
// 匯入圖片
import editIcon from "../../assets/images/memberCenter/edit.svg";
import deleteIcon from "../../assets/images/memberCenter/delete.svg";
// ui kit
import { Button, Form, Input, Message, Modal } from "@arco-design/web-react";
// 匯入組件
import PhoneInput from "../../components/common/Form/PhoneInput";

interface FrequentTravelersType {
  updateName: string;
  updateId: string;
  updatePhone: { input: string; phone: string };
}

interface UpdateEditTravelersDataType {
  id: string;
  name: string;
  phone: string;
}

const FrequentTravelers: React.FC = () => {
  const [editData, setEditData] = useState("frequentTravelers");

  //
  const [deleteVisible, setDeleteVisible] = useState(false);

  // 會員常用旅客資料
  const [frequentTravelersData, setFrequentTravelersData] = useState([
    { id: "1", name: "張三", phone: "0989****61" },
    { id: "2", name: "李四", phone: "0927****80" },
    { id: "3", name: "王五", phone: "0935****39" },
    { id: "4", name: "趙六", phone: "0905****21" },
  ]);

  // 會員常用旅客資料編輯用
  const [updateEditTravelersData, setUpdateEditTravelersData] = useState({
    id: "",
    name: "",
    phone: "",
  });

  // ui kit
  const FormItem = Form.Item;
  const [form] = Form.useForm();

  // 新增旅客
  const addFrequentTravelersSubmit = (value: FrequentTravelersType) => {
    Message.success("更改成功");
    const newData = [...frequentTravelersData];
    newData.push({
      id: value.updateId,
      name: value.updateName,
      phone: value.updatePhone.input,
    });
    setFrequentTravelersData(newData);
    setEditData("frequentTravelers");
  };

  // 開啟編輯旅客
  const editFrequentTravelers = (item: UpdateEditTravelersDataType) => {
    console.log(item);
    setEditData("editFrequentTravelers");
    setUpdateEditTravelersData(item);
  };

  // 開啟刪除常用旅客彈窗
  const deleteFrequentTravelers = (item: UpdateEditTravelersDataType) => {
    setUpdateEditTravelersData(item);
    setDeleteVisible(true)
  };

  // 編輯旅客表單提交
  const editFrequentTravelersSubmit = (value: FrequentTravelersType) => {
    Message.success("更改成功");
    console.log(value);
    const newData = [...frequentTravelersData];
    const setNewData = newData.map((item) => {
      if (item.name === value.updateName) {
        return {
          id: value.updateId,
          name: value.updateName,
          phone: value.updatePhone.input,
        };
      }
      return item;
    });
    setFrequentTravelersData(setNewData);
    setEditData("frequentTravelers");
  };

  // 確定刪除常用旅客表單提交
  const deleteSubmit = () => {
    setDeleteVisible(false);
    const newData = [...frequentTravelersData];
    const setNewdate = newData.filter(
      (item) => item.id !== updateEditTravelersData.id
    );
    setFrequentTravelersData(setNewdate);
    Message.success("刪除成功");
  };

  return (
    <>
      {/* 常用旅客主頁 */}
      <div
        className={` xl:w-[800px] flex-col gap-[12px] md:gap-[20px] ${
          editData === "frequentTravelers" ? "flex" : "hidden"
        }`}
      >
        <ul
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
        >
          {/* 常用旅客標題 */}
          <li className={` flex justify-between items-center `}>
            <div className={`flex items-center gap-[4px]`}>
              <p className={`text-[16px] md:text-[20px]`}>常用旅客</p>
              <div
                className={`border-r border-solid border-[#E5E6EB] h-[16px]`}
              ></div>
              <p className={`text-12px text-[#86909C] md:text-[14px]`}>
                最多只能新增20位旅客
              </p>
            </div>
            <button
              onClick={() => setEditData("addFrequentTravelers")}
              className={`py-[3px] px-[16px] bg-[#3A57E8] text-[#fff] rounded-[2px]`}
            >
              新增
            </button>
          </li>
          <li
            className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
          >
            {/* 會員常用旅客資料 */}
            <div>
              {frequentTravelersData.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between gap-[16px] py-[13px] px-[20px] border-b border-solid border-[#E5E6EB]`}
                >
                  <div className={`flex gap-[16px]`}>
                    <div
                      className={`flex items-center justify-center rounded-[50%] w-[40px] h-[40px] text-[#fff] bg-[#5A78ED]`}
                    >
                      <p className={``}>{item.name.slice(0, 1)}</p>
                    </div>
                    <div className={`flex flex-col gap-[2px]`}>
                      <p className={``}>{item.name}</p>
                      <p className={`text-[#86909C]`}>{item.phone}</p>
                    </div>
                  </div>
                  <div className={`flex`}>
                    <button onClick={() => editFrequentTravelers(item)}>
                      <img src={editIcon} alt="編輯" />
                    </button>
                    <div
                      className={`mx-[8px] border-r border-solid border-[#E5E6EB] h-[12px]`}
                    ></div>
                    <button onClick={() => deleteFrequentTravelers(item)}>
                      <img src={deleteIcon} alt="刪除" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>

      {/* 新增常用旅客 */}
      {editData === "addFrequentTravelers" && (
        <Form
          onSubmit={addFrequentTravelersSubmit}
          form={form}
          autoComplete="on"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          className={` flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] xl:flex-row-reverse xl:w-[800px] ${
            editData === "addFrequentTravelers" ? "flex" : "hidden"
          } `}
        >
          <div
            className={` w-full border-y border-[#E5E6EB] border-solid py-[20px] px-[16px] md:border md:rounded-[16px] md:px-[40px] md:py-[40px] `}
          >
            {/* 同步更新至會員中心選項 */}
            <div
              className={` flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
            >
              <p className={`text-[16px] md:text-[20px] `}>新增旅客</p>
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
            <div className={`flex gap-[8px] md:justify-end `}>
              <button
                onClick={() => setEditData("frequentTravelers")}
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

      {/* 編輯常用旅客 */}
      {editData === "editFrequentTravelers" && (
        <Form
          onSubmit={editFrequentTravelersSubmit}
          form={form}
          initialValues={{
            updateName: updateEditTravelersData.name,
            updateId: "H124***062",
            updatePhone: {
              input: updateEditTravelersData.phone,
              phone: "+886",
            },
          }}
          autoComplete="on"
          requiredSymbol={{ position: "start" }}
          layout="vertical"
          className={` flex-col m-[0_auto] gap-[16px] my-[18px] md:my-[20px] md:gap-[20px] xl:flex-row-reverse xl:w-[800px] ${
            editData === "editFrequentTravelers" ? "flex" : "hidden"
          } `}
        >
          <div
            className={` w-full border-y border-[#E5E6EB] border-solid py-[20px] px-[16px] md:border md:rounded-[16px] md:px-[40px] md:py-[40px] `}
          >
            {/* 同步更新至會員中心選項 */}
            <div
              className={` flex flex-col w-full gap-[12px] mb-[12px] md:flex-row md:justify-between md:items-center md:mb-[20px]`}
            >
              <p className={`text-[16px] md:text-[20px] `}>編輯旅客</p>
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
            <div className={`flex gap-[8px] md:justify-end `}>
              <button
                onClick={() => setEditData("frequentTravelers")}
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

      {/* 刪除帳號-確定刪除帳號 */}
      {deleteVisible === true && (
        <Modal
          title="是否要刪除常用旅客?"
          visible={deleteVisible}
          onCancel={() => setDeleteVisible(false)}
          footer={
            <div
              className={` flex flex-col gap-[10px] md:flex-row md:gap-0 md:justify-end md:items-center`}
            >
              <div className={`flex gap-[8px]`}>
                <Button
                  onClick={deleteSubmit}
                  type="primary"
                  className={` w-full !bg-[#EC4A58] `}
                >
                  確定
                </Button>
                <Button
                  onClick={() => setDeleteVisible(false)}
                  className={`w-full`}
                >
                  取消
                </Button>
              </div>
            </div>
          }
          className={`w-[90%] md:w-[520px]`}
        >
          <p className={`pb-[4px]`}>
            提醒您，刪除後該資料將永久遺失，且舊有已建立的訂單將不會同步更新至最新狀態。
          </p>
        </Modal>
      )}
    </>
  );
};

export default FrequentTravelers;
