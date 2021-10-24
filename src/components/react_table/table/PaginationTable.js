import React, {useMemo} from 'react';
import {COLUMNS} from "./Columns";
import MOCK_DATA from '../../../data/MOCK_DATA.json'
import {useTable, usePagination} from 'react-table';
import '../ReactTable.css';


function PaginationTable(props) {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({
        columns: columns,
        data: data
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        page,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow
    } = tableInstance;

    const {pageIndex, pageSize} = state;

    return (

        <div className='table-container'>
            <h3 className='table-heading'>Basic Table</h3>
            {/*apply the table props*/}
            <table {...getTableProps} className='table'>
                <thead>
                {/*loop over the header rows*/}
                {headerGroups.map(headerGroup => (
                    // apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            // loop over the headers in each row
                            headerGroup.headers.map(column => (
                                // apply the header cell props
                                <th {...column.getHeaderProps()}>
                                    {/*  render the header*/}
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
                </thead>

                {/* apply the table body props */}
                <tbody {...getTableBodyProps()}>
                {/* loop over the table rows*/}
                {page.map(row => {
                    // prepare the row for display
                    prepareRow(row);
                    return (
                        // apply the row props
                        <tr {...row.getRowProps()}>
                            {/*loop over the rows cells*/}
                            {row.cells.map(cell => {
                                // apply the cell props
                                return <td {...cell.getCellProps()}>
                                    {/* render the cell contents*/}
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong> {' '}
                </span>
                <span>
                    | Go to page: {''}
                    <input type='number' defaultValue={pageIndex + 1}
                           onChange={e => {
                               const pageNumber = e.target.value ? Number(e.target.value) - 1
                                   : 0
                               gotoPage(pageNumber)
                           }}
                           style={{width: '50px'}}
                    />
                </span>
                <select value={pageSize} onChange={e => setPageSize(e.target.value)}>
                    {
                        [10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
        </div>

    );
}

export default PaginationTable;