// export interface TableData{
//     id: number,
//     source: string,
//     result: string
//     name: string,
//     user: string,
//     credits: string,
//     type: string,
//     date: string,
// }
export interface TableData{
    id: number,
    useId: string,
    title: string
    completed: string,
}
export interface Tabs{
    id: number,
    label: string,
    isActive: boolean,
    route: string,
  }