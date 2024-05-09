// react原生方法
import { useState } from "react";
// 匯入圖片
import deleteIcon from "../assets/images/memberCenter/delete.svg";
import { Divider } from "@arco-design/web-react";

function Cart() {
  // 商品狀態
  const [items, setItems] = useState([
    {
      id: 1,
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
    {
      id: 2,
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
    {
      id: 3,
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
  ]);

  // 部分選擇商品
  const toggleItemSelection = (itemId: number) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  // 全選商品
  const selectAllItems = () => {
    setItems(items.map((item) => ({ ...item, selected: true })));
  };

  // 清除全選商品
  const deselectAllItems = () => {
    setItems(items.map((item) => ({ ...item, selected: false })));
  };

  // 全選商品狀態
  const isAllSelected = items.every((item) => item.selected);
  // const isSomeSelected = items.some((item) => item.selected);

  return (
    <div className={`max-w-[1920px] `}>
      {/* banner */}
      <div className={` h-[80px] bg-[#E5E6EB] md:h-[160px] `}></div>
      {/* 主要內容 */}
      <div
        className={` flex flex-col gap-[16px] md:gap-[20px] md:px-[24px] md:pt-[20px] md:pb-[60px] xl:p-0 xl:pt-[40px] xl:pb-[80px] xl:w-[1040px] xl:m-[0_auto] xl:flex-row-reverse `}
      >
        {/* 明細 */}
        <div>
          <div
            className={`border-b border-solid border-[#E5E6EB] w-full md:border md:rounded-[16px] xl:w-[320px]`}
          >
            <p className={`text-[14px] py-[11px] px-[16px]`}>
              僅限一次支付同業者的訂單
            </p>
            <div
              className={`border-b border-solid border-[#E5E6EB] w-full`}
            ></div>
            <div className={` px-[16px] py-[16px]`}>
              <div className={`flex justify-between pb-[20px]`}>
                <p className={`text-[16px]`}>商品合計</p>
                <p className={`text-[20px]`}>NT$ 1,100</p>
              </div>
              <button className={` w-full py-[3px] bg-[#3A57E8] text-[#fff]`}>
                確認付款
              </button>
            </div>
          </div>
        </div>
        {/* 購買清單 */}
        <div
          className={` md:rounded-[16px] border border-solid border-[#E5E6EB]`}
        >
          {/* 全選狀態按鈕 */}
          <div
            className={`bg-[#fff] py-[11px] px-[16px] border-y border-solid border-[#E5E6EB] w-full`}
          >
            <input
              onChange={isAllSelected ? deselectAllItems : selectAllItems}
              type="checkbox"
              checked={isAllSelected}
              className={`mr-[8px]`}
            />
            展睿資訊股份有限公司
          </div>
          {/* 單選狀態按鈕 */}
          <ul
            className={` p-[8px] flex flex-col gap-[16px] md:p-[20px] bg-[#F7F8FA] xl:w-[700px] `}
          >
            {items.map((item) => (
              <li
                key={item.id}
                className={`bg-[#fff] overflow-hidden border border-solid border-[#3A57E8] md:rounded-[8px]`}
              >
                {/* 標題 */}
                <div
                  className={`flex justify-between gap-[8px] px-[12px] py-[8px] md:px-[20px] md:py-[12px]`}
                >
                  {/* 左選項 */}
                  <div className={`flex items-center gap-[8px] `}>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleItemSelection(item.id)}
                    />
                    <p>{item.name}</p>
                  </div>
                  {/* 右刪除icon */}
                  <div
                    className={`flex justify-center items-center bg-[#F2F3F5] rounded-[2px] w-[32px] h-[32px] `}
                  >
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
                <Divider
                  className={`bg-[#F2F3F5] m-0`}
                  style={{
                    borderBottomWidth: 2,
                    borderBottomStyle: "dashed",
                  }}
                />
                <div className={`p-[12px] md:p-[16px] xl:p-[20px] `}>
                  <div className={`md:flex gap-[16px]`}>
                    <img
                      src="https://i0.wp.com/1.bp.blogspot.com/-ToGcRVlOmPg/XmYJezmrwYI/AAAAAAAAFGQ/27636S3TFK8eJnvVyz8KasDLmUh3a5txwCLcBGAsYHQ/s1600/04.%25E8%2598%2587%25E7%25BE%258E%25E5%25B3%25B6.jpg?ssl=1"
                      alt="圖"
                      className={` w-full h-[96px] md:w-[160px] object-cover `}
                    />
                    <div className={`pt-[8px]`}>
                      <div className={` pb-[8px] text-[14px]`}>
                        <p>訂單時間 : 2024-04-21</p>
                        <p>成人票*1</p>
                        <p>敬老票*2</p>
                      </div>
                    </div>
                  </div>
                  <p className={`text-[20px] text-right `}>NT$ 1,100</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
