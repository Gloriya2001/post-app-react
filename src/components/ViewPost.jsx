import React from 'react'
import Navbar from './Navbar'

const ViewPost = () => {
    return (
        <div>

<Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row">

                            <h2>View Post</h2>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th scope="col">User Id</th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Body</th>
                                        </tr>

                                        <tr>
                                            <th>aaa</th>
                                            <td>bbb</td>
                                            <td>cc</td>
                                            <td>ddd</td>
                                        </tr>


                                    </thead>
                                </table>




                            </div>
                        </div>



                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewPost