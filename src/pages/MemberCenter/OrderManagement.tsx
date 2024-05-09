import React from "react";
import "../../assets/OrderManagement.css";
import {
  Alert,
  Divider,
  Link,
  Pagination,
  Tabs,
  Typography,
} from "@arco-design/web-react";
import { DatePicker } from "@arco-design/web-react";
import dayjs from "dayjs";

const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;

const OrderManagement: React.FC = () => {
  const datapickerVal = (dateString: string[], value: dayjs.Dayjs[]) => {
    console.log(dateString);
    console.log(value);
  };

  const items = [
    {
      id: "1",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
    {
      id: "2",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
    {
      id: "3",
      name: "格上租車券+阿里山門票+奮起湖經典三大美食",
      selected: false,
    },
  ];

  const tabs = [
    {
      id: "1",
      name: "待付款",
    },
    {
      id: "2",
      name: "已付款",
    },
    {
      id: "3",
      name: "已失效",
    },
  ];

  return (
    <div
      className={`px-[8px] border border-solid border-[#E5E6EB] bg-[#fff] rounded-[16px] md:p-[40px] xl:w-[800px] `}
    >
      <p className={`hidden text-[20px] pb-[20px] md:block `}>訂單管理</p>
      <Tabs
        defaultActiveTab="1"
        extra={
          <RangePicker
            className={`w-[240px] mt-[4px]`}
            onChange={datapickerVal}
            shortcuts={[
              {
                text: "next 7 days",
                value: () => [dayjs(), dayjs().add(1, "week")],
              },
              {
                text: "next 30 days",
                value: () => [dayjs(), dayjs().add(1, "month")],
              },
              {
                text: "next 365 days",
                value: () => [dayjs(), dayjs().add(1, "year")],
              },
            ]}
          />
        }
      >
        {tabs.map((tabs) => (
          <TabPane key={tabs.id} title={tabs.name}>
            <Typography.Paragraph>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-[#fff] mb-[12px] last:mb-0 border border-solid border-[#86909C rounded-[4px]`}
                >
                  {/* 標題 */}
                  <p className={`px-[12px] py-[8px] md:px-[20px] md:py-[12px]`}>
                    {item.name}
                  </p>
                  <Alert
                    type="error"
                    title={`付款剩餘時間 : 12:16:53`}
                    className={`p-[8px] !bg-[##EC4A58] `}
                  />
                  <div className={`p-[12px] md:p-[16px] xl:p-[20px] `}>
                    <div className={`md:flex gap-[16px]`}>
                      <img
                        src="https://i0.wp.com/1.bp.blogspot.com/-ToGcRVlOmPg/XmYJezmrwYI/AAAAAAAAFGQ/27636S3TFK8eJnvVyz8KasDLmUh3a5txwCLcBGAsYHQ/s1600/04.%25E8%2598%2587%25E7%25BE%258E%25E5%25B3%25B6.jpg?ssl=1"
                        alt="圖"
                        className={`w-full h-[96px] md:w-[160px] object-cover`}
                      />
                      <div className={`pt-[8px]`}>
                        <div className={`pb-[8px] text-[14px]`}>
                          <p>訂單時間 : 2024-04-21</p>
                          <p>成人票*1</p>
                          <p>敬老票*2</p>
                        </div>
                      </div>
                    </div>
                    <p className={`text-[20px] text-right `}>NT$ 1,100</p>
                  </div>
                  <Divider
                    className={`bg-[#F2F3F5] m-0`}
                    style={{
                      borderBottomWidth: 2,
                      borderBottomStyle: "dashed",
                    }}
                  />
                  <div
                    className={`flex gap-[8px] p-[12px] md:justify-end md:px-[16px] md:py-[11px]`}
                  >
                    {tabs.name === "待付款" && (
                      <>
                        <button
                          className={`px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto `}
                        >
                          取消訂單
                        </button>
                        <Link
                          className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                        >
                          前往付款
                        </Link>
                      </>
                    )}
                    {tabs.name === "已付款" && (
                      <Link
                        className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                      >
                        訂單詳情
                      </Link>
                    )}
                    {tabs.name === "已失效" && (
                      <>
                        <Link
                          className={`px-[16px] py-[3px] text-[#4E5969] bg-[#F2F3F5] w-[35%] md:w-auto `}
                        >
                          訂單詳請
                        </Link>
                        <Link
                          className={`bg-[#3A57E8] text-[#fff] px-[16px] py-[3px] w-[65%] text-center md:w-auto `}
                        >
                          再次預定
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <Pagination className={`justify-center`} total={200} />
            </Typography.Paragraph>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default OrderManagement;
