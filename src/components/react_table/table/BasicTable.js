import React, {useMemo} from 'react';
import {COLUMNS} from "./Columns";
import MOCK_DATA from '../../../data/MOCK_DATA.json'
import {useTable} from 'react-table';
import '../ReactTable.css';


function BasicTable(props) {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance;

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
                {rows.map(row => {
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
                <tfoot>
                {
                    // loop over the footer rows
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>
                                    {column.render('Footer')}
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </tfoot>
            </table>
        </div>

    );
}

export default BasicTable;