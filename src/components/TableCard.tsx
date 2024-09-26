"use client"

import React from 'react'
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { Button } from './ui/button';
import { DataTablePagination } from './DataTablePagination';
import { LuArrowUpDown } from 'react-icons/lu';

export type DataSRN = {
    noMetodologi: string
    judul: string
    versi: string
    noSurat: string
    tanggalSurat: string
}

// const data: DataSRN[] = [
//     {
//         noMetodologi: "KMSAH-001",
//         judul: "Kerangka Metodologi Perhitungan",
//         versi: "18 Oktober 2023",
//         noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
//         tanggalSurat: "2023-10-18"
//     },
//     {
//         noMetodologi: "MSAH-001",
//         judul: "Substitusi Minyak Tanah dengan LPG",
//         versi: "	16 Juli 2021",
//         noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
//         tanggalSurat: "2023-10-18"
//     },
//     {
//         noMetodologi: "MSAH-002",
//         judul: "Pengurangan Deforestasi",
//         versi: "18 Oktober 2023",
//         noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
//         tanggalSurat: "2023-10-18"
//     },
//     {
//         noMetodologi: "MSAH-003",
//         judul: "Pengurangan Degradasi Hutan",
//         versi: "22 Agustus 2019",
//         noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
//         tanggalSurat: "2023-10-18"
//     },
//     {
//         noMetodologi: "MSAH-004",
//         judul: "Perhitungan emisi dekomposisi gambut",
//         versi: "17 Feb 2020",
//         noSurat: "SK.30/PPI/IGAS/PPI.2/10/2023",
//         tanggalSurat: "2023-10-18"
//     }
// ]

const columns: ColumnDef<DataSRN>[] = [
    {
        accessorKey: "noMetodologi",
        header: ({column}) => {
            return (
                <Button 
                    variant={"ghost"}
                    size={"sm"}
                    className='text-[11px] p-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    No. Metodologi
                    <LuArrowUpDown className='ml-2 h-3 w-3'/>
                </Button>
            )
        },
    },
    {
        accessorKey: "judul",
        header: ({ column }) => {
            return (
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    className='text-[11px] p-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Judul
                    <LuArrowUpDown className='ml-2 h-3 w-3' />
                </Button>
            )
        },
    },
    {
        accessorKey: "versi",
        header: ({ column }) => {
            return (
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    className='text-[11px] p-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Versi
                    <LuArrowUpDown className='ml-2 h-3 w-3' />
                </Button>
            )
        },
    },
    {
        accessorKey: "noSurat",
        header: ({ column }) => {
            return (
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    className='text-[11px] p-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    No. Surat Keputusan
                    <LuArrowUpDown className='ml-2 h-3 w-3' />
                </Button>
            )
        },
    },
    {
        accessorKey: "tanggalSurat",
        header: ({ column }) => {
            return (
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    className='text-[11px] p-0 hover:bg-transparent'
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tanggal No. Surat Keputusan
                    <LuArrowUpDown className='ml-2 h-3 w-3' />
                </Button>
            )
        },
    },
]

interface TableCardProps {
    kategori: string;
    data: DataSRN[];
}

export const TableCard = ({kategori, data } : TableCardProps ) => {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        }
    })

    return (
        <Card className='shadow-md'>
            <CardHeader className='py-4'>
                <CardTitle className="text-sm">{kategori}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
                <Table className="text-[11px]">
                    <TableHeader className='bg-lightGreen'>
                        {table.getHeaderGroups().map((headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className='text-white'>{header.isPlaceholder ? null : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}</TableHead>
                                    )
                                })}
                            </TableRow>
                        )))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <DataTablePagination table={table}/>
            </CardContent>
        </Card>
    )
}
