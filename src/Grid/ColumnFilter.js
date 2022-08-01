import React from "react";
import {getFilterSearch} from "../Reducer/cryptoSlice";
import {useDispatch} from "react-redux";
import './Grid.css'
const ColumnFilter=({column}) => {
    const dispatch = useDispatch()
    const {filterValue,setFilter} = column
    return (
        <div className="filterWrapper" onClick={(event) => { event.stopPropagation();}}>
            Filter:
            <input value={filterValue || ''} onChange={(e) => {
                e.stopPropagation()
                setFilter(e.target.value);
                dispatch(getFilterSearch(e.target.value))}}/>
        </div>
    )
}
export default ColumnFilter;

