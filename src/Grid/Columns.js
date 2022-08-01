import ColumnFilter from "./ColumnFilter";
export  const Columns = [
    {
        Header:'Symbol',
        accessor:'symbol',
        Filter:ColumnFilter,
        disableFilters:false,
        disableSortBy:false,
    },
    {
        Header:'Open Price',
        accessor: 'openPrice',
        disableFilters:true,
        disableSortBy:true,
    },
    {
        Header:'Low Price',
        accessor: 'lowPrice',
        disableFilters:true,
        disableSortBy:true
    },
    {
        Header:'High Price',
        accessor: 'highPrice',
        disableFilters:true,
        disableSortBy:true
    },
    {
        Header:'Last Price',
        accessor: 'lastPrice',
        disableFilters:true,
        disableSortBy:true
    },
    {
        Header:'Bid Price',
        accessor: 'bidPrice',
        disableFilters:true,
        disableSortBy:true,
    },
    {
        Header:'Ask Price',
        accessor: 'askPrice',
        disableFilters:true,
        disableSortBy:true
    },
]