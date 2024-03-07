import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import DLT from './redux/actions/deleteAction';
import Table from 'react-bootstrap/Table'; // Add this import

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getval = useSelector((state) => state.cartreducer.carts)
    const dispatch = useDispatch()




    const handleDelete = (e) => {
        dispatch(DLT(e))
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to='/' className='text-decoration-none text-light mx-3'>Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getval.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-white" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getval.length ?
                            <div className='card_details'>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>
                                                Photo
                                            </th>
                                            <th>
                                                Restaurant Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getval.map((e, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>


                                                            <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} alt='' />
                                                        </NavLink>
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price: {e.price}</p>
                                                        <p>Quantity: {e.qnty}</p>
                                                        <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => handleDelete(e.id)}>
                                                            <i className='fas fa-trash'></i>
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        <p className='text-center'>Total:300</p>
                                    </tbody>
                                </Table>
                            </div>
                            :
                            <div className='card_details d-flex justify-content-center' style={{ padding: "3px" }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ cursor: "pointer", position: "absolute", top: 2, right: 20 }}></i>
                                <p>your cart is empty</p>
                            </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header
