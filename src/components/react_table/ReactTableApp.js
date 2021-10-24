import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import BasicTable from "./table/BasicTable";
import SortingTable from "./table/SortingTable";
import GlobalFilter from "./table/GlobalFilter";
import FilteringTable from "./table/FilteringTable";
import PaginationTable from "./table/PaginationTable";

function ReactTableApp(props) {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to='/react-table-tutorial/basic_table'>
                            Basic Table
                        </Link>
                    </li>
                    <li>
                        <Link to='/react-table-tutorial/sorting-table'>
                            Sorting Table
                        </Link>
                    </li>
                    <li>
                        <Link to='/react-table-tutorial/global-filter-table'>
                            Global Filter Table
                        </Link>
                    </li>
                    <li>
                        <Link to='/react-table-tutorial/react-table-pagination'>
                            Pagination
                        </Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route path='/react-table-tutorial/basic_table'
                       component={BasicTable} exact/>
                <Route path='/react-table-tutorial/sorting-table'
                       component={SortingTable} exact/>
                <Route path='/react-table-tutorial/global-filter-table'
                       component={FilteringTable} exact/>
                <Route path='/react-table-tutorial/react-table-pagination'
                       component={PaginationTable}/>
            </Switch>
        </div>
    );
}

export default ReactTableApp;