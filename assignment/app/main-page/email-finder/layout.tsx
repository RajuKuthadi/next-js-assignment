"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Tabs } from "./history/_components/Utils";

export default function EmailFinderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tabs, setTabs] = useState<Array<Tabs>>([
    {
      id: 1,
      label: "Finder",
      isActive: false,
      route: `/main-page/email-finder/finder`,
    },
    {
      id: 2,
      label: "History",
      isActive: true,
      route: `/main-page/email-finder/history`,
    },
  ]);
  useEffect(() => {
    router.push("/main-page/email-finder/history");
  }, []);
  const handleClick = (item: Tabs) => {
    const tabsArr: Array<Tabs> = [...tabs];
    tabsArr.map((item: Tabs) => {
      item.isActive = false;
      return item;
    });
    const index = tabsArr.findIndex((it: Tabs) => it.id == item.id);
    tabsArr[index].isActive = !item.isActive;
    setTabs(tabsArr);
    router.push(item.route);
  };
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="m-4 font-bold">Email Finder</h1>
        <div className="mt-2 me-4">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Sample File
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="m-3 flex gap-4 w-1/2">
          {tabs.map((item: Tabs) => {
            return (
              <div
                className={`flex text-sm p-1 ${
                  item.isActive
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "border-none"
                }`}
                onClick={() => handleClick(item)}
                key={item.id}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div className="me-4">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
          + Type
          </button>
        </div>
      </div>
      <div className="m-4 bg-transparent">{children}</div>
    </div>
  );
}
