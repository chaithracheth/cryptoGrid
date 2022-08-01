import './App.css';
import {getData,getDataFailure,getDataSuccess} from "./Reducer/cryptoSlice";
import {useDispatch,connect} from 'react-redux'
import Selector from "./Selector/Selector";
import Grid from "./Grid/Grid";
import {useEffect,useState} from "react";

import _ from'lodash'

const url = 'https://api.wazirx.com/sapi/v1/tickers/24hr'

function App(props) {
    const {data} =  props
    const [gridData,setGridData] = useState();
    const [polling,setPolling] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async (gridData) => {
            const resp = await fetch(url)
            const result = await resp.json()
            let difference = _.differenceWith(gridData, result, function (o1, o2) {
                if(JSON.stringify(o1) !== JSON.stringify(o2))  {
                    dispatch(getDataSuccess(result))

                }
            });
        }
        if(polling) {
            const timer = setInterval(() => {
                fetchData().catch((error) => {
                    dispatch(getDataFailure())
                })
            },2000)
            return () => clearInterval(timer)
        }

    },[polling])

    useEffect(() => {
        dispatch(getData({cb:(response) => {setGridData(response);
        if(response.length) {
            setPolling(true)
        }
        }}))
    }, []);



  return (
    <div className="App">
        <Grid
            tableData={data}
        />
    </div>
  );
}

export default connect(Selector)(App);
