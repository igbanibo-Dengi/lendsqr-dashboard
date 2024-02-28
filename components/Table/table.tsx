'use client'

import React from 'react'
import Styles from './table.module.scss'

import {
    Column,
    Table as ReactTable,
    PaginationState,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
    getSortedRowModel,
} from '@tanstack/react-table'

import { data, User } from './data'
import Image from 'next/image'

const MainTable = () => {
    const columns = React.useMemo<ColumnDef<User>[]>(() => [
        {
            accessorFn: row => row.name,
            id: 'name',
            cell: info => info.getValue(),
            header: () => <span style={{ backgroundColor: 'red' }}>Usernames</span>,
            footer: props => props.column.id,
        },
        {
            accessorFn: row => row.organization,
            id: 'organization',
            cell: info => info.getValue(),
            header: () => <span>Organization</span>,
            footer: props => props.column.id,
        },
        {
            accessorFn: row => row.email,
            id: 'email',
            cell: info => info.getValue(),
            header: () => <span>Email</span>,
            footer: props => props.column.id,
        },
        {
            accessorFn: row => row.phone,
            id: 'phone',
            cell: info => info.getValue(),
            header: () => <span>Phone</span>,
            footer: props => props.column.id,
        },
        {
            accessorFn: row => row.registered,
            id: 'registered',
            cell: info => info.getValue(),
            header: () => <span>Date joined</span>,
            footer: props => props.column.id,
        },
    ], [])

    return (
        <>
            <Table
                {...{
                    data,
                    columns,
                }}
            />
            <hr />
        </>
    )
}

export default MainTable

function Table({
    data,
    columns,
}: {
    data: User[]
    columns: ColumnDef<User>[]
}) {
    const table = useReactTable({
        columns,
        data,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    const { rows } = table.getRowModel()



    return (
        <div className={Styles.tableContainer}>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    <div
                                        className={`${Styles.columnHeader} ${header.column.getCanSort()
                                            ? Styles.cursorPointer
                                            : Styles.selectNone
                                            }`}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc:
                                                <Image
                                                    src='/icons/filter-up.svg'
                                                    alt='toggle'
                                                    width={16}
                                                    height={16}
                                                />,
                                            desc:
                                                <Image
                                                    src='/icons/filter-down.svg'
                                                    alt='toggle'
                                                    width={16}
                                                    height={16}
                                                />,
                                        }[header.column.getIsSorted() as string] ?? null}
                                        {header.column.getCanFilter() ? (
                                            <div>
                                                <Filter column={header.column} table={table} />
                                            </div>
                                        ) : null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className={Styles.body}>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={Styles.cell}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={Styles.pagination}>
                <button
                    className={Styles.paginationButton}
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className={Styles.paginationButton}
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className={Styles.paginationButton}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className={Styles.paginationButton}
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
                <span className={Styles.paginationInfo}>
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
                </span>
                <select
                    className={Styles.paginationSelect}
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div className={Styles.rowInfo}>
                Showing {table.getRowModel().rows.length.toLocaleString()} of {table.getRowCount().toLocaleString()} Rows
            </div>
            <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
        </div>
    )
}


function Filter({
    column,
    table,
}: {
    column: Column<any, any>
    table: ReactTable<any>
}) {
    const firstValue = table
        .getPreFilteredRowModel()
        .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    return typeof firstValue === 'number' ? (
        <div className="flex space-x-2">
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        e.target.value,
                        old?.[1],
                    ])
                }
                placeholder={`Min`}
                className="w-24 border shadow rounded"
            />
            <input
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ''}
                onChange={e =>
                    column.setFilterValue((old: [number, number]) => [
                        old?.[0],
                        e.target.value,
                    ])
                }
                placeholder={`Max`}
                className="w-24 border shadow rounded"
            />
        </div>
    ) : (
        <input
            type="text"
            value={(columnFilterValue ?? '') as string}
            onChange={e => column.setFilterValue(e.target.value)}
            placeholder={`Search...`}
            className="w-36 border shadow rounded"
        />
    )
}
