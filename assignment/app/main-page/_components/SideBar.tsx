import React, { useState } from "react";
import { List, sideBarList, SideBarOptions } from "./Utils";
import { usePathname, useRouter } from "next/navigation";
import PlanCard from "./PlanCard";

export default function SideBar() {
  const [list, setList] = useState<Array<SideBarOptions>>(sideBarList);
  //   const [isAcive,setIsAcive]=useState(false)
  const path = usePathname();
  const router = useRouter();
  const handleClick = (data: List, title: string) => {
    router.push(data.route);
    console.log("PathName", path);
    console.log(data, title);
    const arrList = [...list];
    const index = sideBarList.findIndex(
      (item: SideBarOptions) => item.title == title
    );
    console.log("index", index);
    const index1 = arrList[index].list.findIndex((item) => item.id == data.id);
    arrList[index].list.map((item: List) => {
      item.isActive = false;
      return item;
    });
    arrList[index].list[index1].isActive = !data.isActive;
    setList(arrList);
  };

  return (
    <div>
      <div>
        <div className="text-sm flex gap-2 p-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <select>
            <option>Charlie Workspace</option>
          </select>
        </div>
      </div>
      <div className="bg-white w-full shadow-md text-gray-500 grid grid-rows-1 p-2 text-sm">
        {list.map((item: SideBarOptions) => {
          return (
            <div key={item.id}>
              <div className="text-[9px] p-1 font-light">{item.title}</div>
              {item.list.map((menuItem: List) => {
                return (
                  <div
                    onClick={() => handleClick(menuItem, item.title)}
                    className={`rounded-md text-[12px] font-medium grid grid-rows-1 gap-[8px] p-[8px] ${
                      menuItem.isActive ? "bg-red-100 text-orange-600" : ""
                    }`}
                    key={menuItem.id}
                  >
                    <div className="flex  gap-2 justify-start items-center ">
                      {menuItem.icon}
                      {menuItem.label}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="mt-10">
          <PlanCard />
        </div>
      </div>
    </div>
  );
}
