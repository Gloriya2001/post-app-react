import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewPost = () => {

    const [post, changePost] = useState([])

    const fetchData = () => {

            axios.get("https://jsonplaceholder.typicode.com/posts").then(

                (response)=>{

                    changePost(response.data)

                }

            ).catch().finally()

    }

useEffect(()=>{fetchData()},[])

    return (
        <div>

            <Navbar />

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
                                        {post.map(

                                            (value,index) => {

                                               return <tr>
                                                    <th>{value.userId}</th>
                                                    <td>{value.id}</td>
                                                    <td>{value.title}</td>
                                                    <td>{value.body}</td>
                                                </tr>



                                            }

                                        )}

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