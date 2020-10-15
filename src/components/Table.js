import React, {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../table.css';

function Table(){
const [urls , setUrls] = useState([]);
useEffect(() => {
    loadUrls();
}, [])

const loadUrls = async ()=>{
    const result = await axios.get("https://urlst-backend.herokuapp.com/get");
    setUrls(result.data.reverse());
}
return(
    <div className="container">
<table className="table table-striped table-hover shadow p-3 mb-5 rounded table-responsive-sm">
        <thead className="thead-dark">
            <tr>
                <th>#</th>
                <th>URL</th>
                <th>Short URL</th>
                <th>Clicks</th>
            </tr>
        </thead>
        <tbody>
        {
            urls.map((url,index)=>(
                <tr>
                <td>{index+1}</td>
            <td><a href = {url.url}>{url.url}</a></td>
            <td><a href = {`https://urlst-backend.herokuapp.com/${url.shorturl}`}>{`https://urlst-backend.herokuapp.com/${url.shorturl}`}</a></td>
            <td>{url.clicks}</td>
            </tr>
            ))
        }
        </tbody>        
    </table>
    </div>
    )
};
export default Table;

