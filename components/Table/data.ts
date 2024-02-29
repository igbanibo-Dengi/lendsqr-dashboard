export const data = [
    {
        "_id": "65de8e9a929ba7ac9c3dc153",
        "index": 0,
        "name": "Miranda Lewis",
        "organization": "PAPRIKUT",
        "email": "mirandalewis@paprikut.com",
        "phone": "+1 (838) 476-3802",
        "registered": "2022-12-10T01:30:17 -01:00"
    },
    {
        "_id": "65de8e9a7fa01cf095c86139",
        "index": 1,
        "name": "Hanson Harrison",
        "organization": "GEEKETRON",
        "email": "hansonharrison@geeketron.com",
        "phone": "+1 (834) 464-2527",
        "registered": "2020-10-20T03:05:54 -01:00"
    },
    {
        "_id": "65de8e9a18e9e7d60eaeead4",
        "index": 2,
        "name": "Potter Hurley",
        "organization": "BIOTICA",
        "email": "potterhurley@biotica.com",
        "phone": "+1 (847) 414-2766",
        "registered": "2017-07-19T04:37:43 -01:00"
    },
    {
        "_id": "65de8e9a97a1dad273b72fdb",
        "index": 3,
        "name": "Kerry Gay",
        "organization": "SARASONIC",
        "email": "kerrygay@sarasonic.com",
        "phone": "+1 (935) 489-2765",
        "registered": "2016-09-14T05:31:22 -01:00"
    },
    {
        "_id": "65de8e9aa2e56c0551cc62d0",
        "index": 4,
        "name": "Traci Ellis",
        "organization": "ZIORE",
        "email": "traciellis@ziore.com",
        "phone": "+1 (934) 540-3135",
        "registered": "2018-03-21T03:23:26 -01:00"
    },
    {
        "_id": "65de8e9aa9bff27fdead1bcf",
        "index": 5,
        "name": "Denise Campbell",
        "organization": "XURBAN",
        "email": "denisecampbell@xurban.com",
        "phone": "+1 (898) 470-3492",
        "registered": "2017-06-25T07:04:44 -01:00"
    },
    {
        "_id": "65de8e9ad783778f7035f502",
        "index": 6,
        "name": "Hughes Aguilar",
        "organization": "OVERFORK",
        "email": "hughesaguilar@overfork.com",
        "phone": "+1 (939) 563-3261",
        "registered": "2022-11-21T03:10:18 -01:00"
    },
    {
        "_id": "65de8e9acb61e77ec0de0fcb",
        "index": 7,
        "name": "Noemi Freeman",
        "organization": "COMVENE",
        "email": "noemifreeman@comvene.com",
        "phone": "+1 (837) 574-2741",
        "registered": "2023-11-30T03:06:03 -01:00"
    },
    {
        "_id": "65de8e9a0816f450d73c5dcf",
        "index": 8,
        "name": "Rosanne Shelton",
        "organization": "CENTICE",
        "email": "rosanneshelton@centice.com",
        "phone": "+1 (810) 595-4000",
        "registered": "2015-04-23T03:03:38 -01:00"
    },
    {
        "_id": "65de8e9ac088b9b580adc710",
        "index": 9,
        "name": "Osborne Craft",
        "organization": "NURALI",
        "email": "osbornecraft@nurali.com",
        "phone": "+1 (829) 451-3147",
        "registered": "2022-10-17T03:53:11 -01:00"
    },
    {
        "_id": "65de8e9a777cf2ac8208dc30",
        "index": 10,
        "name": "Winnie Cooper",
        "organization": "SULFAX",
        "email": "winniecooper@sulfax.com",
        "phone": "+1 (883) 446-3270",
        "registered": "2019-07-01T01:56:54 -01:00"
    },
    {
        "_id": "65de8e9a5b55071118c3a3b4",
        "index": 11,
        "name": "Jennifer Vazquez",
        "organization": "SPHERIX",
        "email": "jennifervazquez@spherix.com",
        "phone": "+1 (964) 560-3125",
        "registered": "2021-07-11T03:14:03 -01:00"
    },
    {
        "_id": "65de8e9aeb86b283ec38ada2",
        "index": 12,
        "name": "Sheri Cotton",
        "organization": "KEEG",
        "email": "shericotton@keeg.com",
        "phone": "+1 (894) 542-2234",
        "registered": "2022-06-07T01:15:02 -01:00"
    },
    {
        "_id": "65de8e9a428446debf8c5bb8",
        "index": 13,
        "name": "Jami Melendez",
        "organization": "SENMEI",
        "email": "jamimelendez@senmei.com",
        "phone": "+1 (838) 525-3997",
        "registered": "2016-09-26T09:55:27 -01:00"
    },
    {
        "_id": "65de8e9a75c7d0006bb88921",
        "index": 14,
        "name": "Pamela Mcmillan",
        "organization": "COASH",
        "email": "pamelamcmillan@coash.com",
        "phone": "+1 (992) 441-3553",
        "registered": "2019-02-17T12:22:25 -01:00"
    },
    {
        "_id": "65de8e9ac4856ceb1a270946",
        "index": 15,
        "name": "Marshall Wilkerson",
        "organization": "INSURITY",
        "email": "marshallwilkerson@insurity.com",
        "phone": "+1 (830) 409-3914",
        "registered": "2022-07-21T12:11:43 -01:00"
    },
    {
        "_id": "65de8e9a8ad0b8bb73d7e13f",
        "index": 16,
        "name": "Sharlene Trevino",
        "organization": "ZENTRY",
        "email": "sharlenetrevino@zentry.com",
        "phone": "+1 (823) 440-3113",
        "registered": "2021-12-01T07:34:17 -01:00"
    }
]


export type User = {
    _id: string;
    index: number;
    name: string;
    company: string;
    email: string;
    phone: string
    registered: string;
    status: 'ative' | 'inactive' | 'blacklisted' | 'pending'
    // more: any;
}






// 'use client'

// import React from 'react'
// import Styles from './table.module.scss'

// import {
//     Column,
//     Table as ReactTable,
//     PaginationState,
//     useReactTable,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     ColumnDef,
//     flexRender,
//     getSortedRowModel,
// } from '@tanstack/react-table'


// import { data, User } from './data'

// const MainTable = () => {

//     // const rerender = React.useReducer(() => ({}), {})[1]

//     const columns = React.useMemo<ColumnDef<User>[]>(
//         () => [
//             {
//                 accessorFn: row => row.name,
//                 id: 'name',
//                 cell: info => info.getValue(),
//                 header: () => <span>Username</span>,
//                 footer: props => props.column.id,
//             },
//             {
//                 accessorFn: row => row.organization,
//                 id: 'organization',
//                 cell: info => info.getValue(),
//                 header: () => <span>Organization</span>,
//                 footer: props => props.column.id,
//             },
//             {
//                 accessorFn: row => row.email,
//                 id: 'email',
//                 cell: info => info.getValue(),
//                 header: () => <span>Email</span>,
//                 footer: props => props.column.id,
//             },
//             {
//                 accessorFn: row => row.phone,
//                 id: 'phone',
//                 cell: info => info.getValue(),
//                 header: () => <span>Phone</span>,
//                 footer: props => props.column.id,
//             },
//             {
//                 accessorFn: row => row.registered,
//                 id: 'registered',
//                 cell: info => info.getValue(),
//                 header: () => <span>Date joined</span>,
//                 footer: props => props.column.id,
//             },
//         ],
//         []
//     )

//     // const [data, setData] = React.useState(() => makeData(100000))
//     // const refreshData = () => setData(() => makeData(100000))

//     return (
//         <>
//             <Table
//                 {...{
//                     data,
//                     columns,
//                 }}
//             />
//             <hr />
//         </>
//     )
// }

// export default MainTable


// function Table({
//     data,
//     columns,
// }: {
//     data: User[]
//     columns: ColumnDef<User>[]
// }) {
//     // const [pagination, setPagination] = React.useState<PaginationState>({
//     //     pageIndex: 0,
//     //     pageSize: 10,
//     // })

//     const table = useReactTable({
//         columns,
//         data,
//         debugTable: true,
//         getCoreRowModel: getCoreRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         // onPaginationChange: setPagination,
//         //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
//         // state: {
//         //     pagination,
//         // },
//         // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
//     })

//     return (
//         <div className="p-2">
//             <div className="h-2" />
//             <table>
//                 <thead>
//                     {table.getHeaderGroups().map(headerGroup => (
//                         <tr key={headerGroup.id}>
//                             {headerGroup.headers.map(header => {
//                                 return (
//                                     <th key={header.id} colSpan={header.colSpan}>
//                                         <div
//                                             {...{
//                                                 className: header.column.getCanSort()
//                                                     ? 'cursor-pointer select-none'
//                                                     : '',
//                                                 onClick: header.column.getToggleSortingHandler(),
//                                             }}
//                                         >
//                                             {flexRender(
//                                                 header.column.columnDef.header,
//                                                 header.getContext()
//                                             )}
//                                             {{
//                                                 asc: <span>up</span>,
//                                                 desc: <span>down</span>,
//                                             }[header.column.getIsSorted() as string] ?? null}
//                                             {header.column.getCanFilter() ? (
//                                                 <div>
//                                                     {/* <Filter column={header.column} table={table} /> */}
//                                                 </div>
//                                             ) : null}
//                                         </div>
//                                     </th>
//                                 )
//                             })}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody>
//                     {table.getRowModel().rows.map(row => {
//                         return (
//                             <tr key={row.id}>
//                                 {row.getVisibleCells().map(cell => {
//                                     return (
//                                         <td key={cell.id}>
//                                             {flexRender(
//                                                 cell.column.columnDef.cell,
//                                                 cell.getContext()
//                                             )}
//                                         </td>
//                                     )
//                                 })}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//             <div className="h-2" />
//             <div className="flex items-center gap-2">
//                 <button
//                     className="border rounded p-1"
//                     onClick={() => table.firstPage()}
//                     disabled={!table.getCanPreviousPage()}
//                 >
//                     {'<<'}
//                 </button>
//                 <button
//                     className="border rounded p-1"
//                     onClick={() => table.previousPage()}
//                     disabled={!table.getCanPreviousPage()}
//                 >
//                     {'<'}
//                 </button>
//                 <button
//                     className="border rounded p-1"
//                     onClick={() => table.nextPage()}
//                     disabled={!table.getCanNextPage()}
//                 >
//                     {'>'}
//                 </button>
//                 <button
//                     className="border rounded p-1"
//                     onClick={() => table.lastPage()}
//                     disabled={!table.getCanNextPage()}
//                 >
//                     {'>>'}
//                 </button>
//                 <span className="flex items-center gap-1">
//                     <div>Page</div>
//                     <strong>
//                         {table.getState().pagination.pageIndex + 1} of{' '}
//                         {table.getPageCount().toLocaleString()}
//                     </strong>
//                 </span>
//                 <span className="flex items-center gap-1">
//                     | Go to page:
//                     <input
//                         type="number"
//                         defaultValue={table.getState().pagination.pageIndex + 1}
//                         onChange={e => {
//                             const page = e.target.value ? Number(e.target.value) - 1 : 0
//                             table.setPageIndex(page)
//                         }}
//                         className="border p-1 rounded w-16"
//                     />
//                 </span>
//                 <select
//                     value={table.getState().pagination.pageSize}
//                     onChange={e => {
//                         table.setPageSize(Number(e.target.value))
//                     }}
//                 >
//                     {[10, 20, 30, 40, 50].map(pageSize => (
//                         <option key={pageSize} value={pageSize}>
//                             Show {pageSize}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
//                 {table.getRowCount().toLocaleString()} Rows
//             </div>
//             <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
//         </div>
//     )
// }
// function Filter({
//     column,
//     table,
// }: {
//     column: Column<any, any>
//     table: ReactTable<any>
// }) {
//     const firstValue = table
//         .getPreFilteredRowModel()
//         .flatRows[0]?.getValue(column.id)

//     const columnFilterValue = column.getFilterValue()

//     return typeof firstValue === 'number' ? (
//         <div className="flex space-x-2">
//             <input
//                 type="number"
//                 value={(columnFilterValue as [number, number])?.[0] ?? ''}
//                 onChange={e =>
//                     column.setFilterValue((old: [number, number]) => [
//                         e.target.value,
//                         old?.[1],
//                     ])
//                 }
//                 placeholder={`Min`}
//                 className="w-24 border shadow rounded"
//             />
//             <input
//                 type="number"
//                 value={(columnFilterValue as [number, number])?.[1] ?? ''}
//                 onChange={e =>
//                     column.setFilterValue((old: [number, number]) => [
//                         old?.[0],
//                         e.target.value,
//                     ])
//                 }
//                 placeholder={`Max`}
//                 className="w-24 border shadow rounded"
//             />
//         </div>
//     ) : (
//         <input
//             type="text"
//             value={(columnFilterValue ?? '') as string}
//             onChange={e => column.setFilterValue(e.target.value)}
//             placeholder={`Search...`}
//             className="w-36 border shadow rounded"
//         />
//     )
// }

