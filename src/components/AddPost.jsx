import React, { useState } from 'react'
import Navbar from './Navbar'

const AddPost = () => {

    const [data, setData] = useState(

        {
            "userName":"",
            "userId":"",
            "dob":"",
            "email":"",
            "password":"",
            "conpassword":""
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
                            <h1><b>Add Post</b></h1>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <lablel className="form-label">User Name</lablel>
                                <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" name='userId' value={data.userId} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date"  id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">email id</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">password</label>
                                <input type="password" id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">confirm password</label>
                                <input type="password" id="" className="form-control" name='conpassword' value={data.conpassword} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={outputHandler}>Add</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default AddPost