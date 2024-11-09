import BellIcon from "@/public/icons/BellIcon";
import React from "react";

export default function PlanCard() {
  return (
    <div className="rounded-lg shadow-lg border border-gray-300">
      <div className="text-[12px] ">
        <div className="flex  rounded-t-lg p-1 bg-gray-100 justify-start gap-3 items-center">
          <div className="rounded-full w-6 h-6 bg-orange-600">
            <BellIcon />
          </div>
          <div>Annual Starter Plan</div>
        </div>
        <div className="flex mt-2 gap-1 justify-start items-center">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div>coin balance :</div>
          <div className="font-bold text-md">197</div>
        </div>
      </div>
      <div className="flex mt-2">
        <button
          type="button"
          className="py-1 w-full px-5 ms-2 me-2 mb-2 text-[10px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Get more credits
        </button>
      </div>
    </div>
  );
}
