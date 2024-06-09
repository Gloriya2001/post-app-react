import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {

    const [data, setData] = useState(

        {
            "userId": ""
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

            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2>Delete</h2>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" name='userId' value={data.userId} onChange={inputHandler}/>
                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-danger" onClick={outputHandler}>Delete</button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Delete