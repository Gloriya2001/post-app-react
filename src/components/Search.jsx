import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

const [data,setData] = useState(

    {
        "userName":""
    }

)

const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})
}
const outputHandler = () => {
    console.log(data)
}


    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2>Search</h2>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={outputHandler}>Search</button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Search   