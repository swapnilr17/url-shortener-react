import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../shrink.css';
function Shrink() {
    
    const [posturls,setPosturls] = useState({
        url: ""
    });
    
    const{url}=posturls;

    const onInputChange = e =>{
        setPosturls({...posturls,[e.target.name]: e.target.value})
    }

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.post(`https://urlst-backend.herokuapp.com/post/?url=${posturls.url}`);
    }
  return (
    <div className="container">
    <form className = "form my-4 form-inline shadow p-3 mb-5 rounded" onSubmit={e=>onSubmit(e)}>  
    <input required type="text" name="url" id="url" placeholder="URL" value={url} onChange={e=>onInputChange(e)} className="form-control col mr-2"/>
        <button type="submit"  onClick={() => window.location.reload(false)} className="btn btn-primary">Shrink</button>
    </form>
    
    </div>
  );
}

export default Shrink;
