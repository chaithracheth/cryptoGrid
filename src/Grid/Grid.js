import  {useTable,useSortBy,useGlobalFilter,useFilters} from 'react-table'
import ColumnFilter from "./ColumnFilter";
import {useMemo} from "react";
import {Columns} from "./Columns";
import './Grid.css'
const Grid = (props) => {
    const {tableData} = props
    const column = useMemo(() => Columns,[])
    const data = useMemo(() => tableData,[tableData])
 const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
 }   =useTable({
         columns:column,
        data:data,
    },
     useFilters,
     useGlobalFilter,useSortBy)

    if(tableData.length) {
        return (
            <>
            <div>
                <table  {...getTableProps()}>
                    <thead>
                    {headerGroups?.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers?.map((column) => (
                                <th className="th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                   <span>{column.render('Header')}</span>
                                    <div className="tableRowWrapper">
                                        <div className="sort" title="">
                                            {column.isSorted ? column.isSortedDesc ? " 🔽" : " 🔼" : column.canSort ?  'Sort' : ''}</div>
                                        <div>{column?.canFilter ? column.render('Filter') : ''}</div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return  <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    else {
        return (
            <h1>Loading...</h1>
        )
    }
}
export default Grid