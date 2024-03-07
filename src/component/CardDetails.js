import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CardDetails = () => {
    const { id } = useParams()
    const [value, setValue] = useState([])
    const getdata = useSelector((state) => state.cartreducer.carts)


    const Compare = (() => {
        const ans = getdata.filter((e) => {
            return e.id === id
        })
        setValue(ans);
    })


    useEffect(() => {
        Compare();

    }, [id])
    console.log("bhaskar", value.address)
    return (
        <>
            {
                value.map((e) => {
                    return (
                        <div className='container mt-2'>
                            <h2 className='text-center'>
                                Iteams Details Page
                            </h2>
                            <section className='container mt-3'>
                                <div className='iteamsdetails'>
                                    <div className='items_img'>
                                        <img src={e.imgdata} />
                                    </div>
                                    <div className='details'>
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p><strong>Restaurant</strong>:{e.rname}</p>
                                                    <p><strong>Price</strong> {e.price}</p>
                                                    <p><strong>Dishes</strong>{e.address}</p>
                                                    <p><strong>Total</strong>300</p>

                                                </td>
                                                <td>
                                                    <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{e.rating}	</span></p>
                                                    <p><strong>Order Review :</strong> <span >1175+ order placed from here  recently	</span></p>
                                                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </div>
                            </section>

                        </div>

                    )
                })
            }




        </>
    )
}


export default CardDetails