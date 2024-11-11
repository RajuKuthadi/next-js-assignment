"use client";
import React, { useEffect, useState } from "react";
import { getLoader } from "./_components/Loader";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
// import { getDummyTableData } from "./_components/DummyTableData";
import { TableData } from "./_components/Utils";

export default function History() {
  const [loader, setLoader] = useState(true);
  const [tableData, setTableData] = useState<Array<TableData>>([]);
  //dummy data columns
  //   const columns: GridColDef[] = [
  //     { field: "source", headerName: "Source", width: 150 },
  //     { field: "result", headerName: "Result", width: 150 },
  //     { field: "name", headerName: "Name", width: 150 },
  //     { field: "user", headerName: "User", width: 150 },
  //     { field: "credits", headerName: "Credits", width: 150 },
  //     { field: "type", headerName: "Type", width: 150 },
  //     { field: "date", headerName: "Date", width: 150 },
  //   ];

  //from api
  const columns: GridColDef[] = [
    { field: "id", headerName: "SNO", width: 150 },
    { field: "userId", headerName: "User ID", width: 150 },
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "completed",
      headerName: "Completed",
      width: 150,
      renderCell: (params: GridRenderCellParams<string, Date>) => (
        <div className="!h-[20px]">
          {params.row.completed ? (
            <button className="relative !w-[65px]  text-[8px] inline-flex items-center justify-center bg-green-200 overflow-hidden border-2 border-green-300 text-sm font-medium text-green-900 rounded-lg  ">
              <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-green-200 ">
                VALID
              </span>
            </button>
          ) : (
            <button className="relative  text-[8px] inline-flex items-center justify-center  overflow-hidden border-2 border-red-300 text-sm font-medium text-red-900 rounded-lg  ">
              <span className="relative px-1 py-0.5 transition-all ease-in duration-75  rounded-md ">
                Validate email
              </span>
            </button>
          )}
        </div>
      ),
    },
  ];
  const getTableData = () => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        //loading dummy data after api call
        // let dataa:Array<TableData> = getDummyTableData();
        //loading from api
        const apiData: Array<TableData> = json;
        setTableData(apiData);
        setLoader(false);
      })
      .catch(() => {
        //got no info of fail case so adding this alert
        setLoader(false)
        alert("Some thing went wrong")
      });
  };
  useEffect(() => {
    getTableData();
  }, []);
  return (
    <div>
      {loader ? (
        getLoader()
      ) : (
        <div>
          <DataGrid
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            density="compact"
            autoHeight
            rows={tableData}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
}
