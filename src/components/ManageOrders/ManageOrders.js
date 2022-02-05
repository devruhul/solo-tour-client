import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';


const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    // get all orders from database
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // delete order from database by id
    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `http://localhost:5000/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = orders.filter(pd => pd._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    
    return (
        <div>
            <h2>This is manage Orders</h2>
            {
                orders.length === 0 ? <Spinner animation="border" variant="info" />
                    : <Table responsive striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody key={order._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <button onClick={() => handleDelete(order._id)} className="btn bg-danger text-white p-2">Delete</button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
            }
        </div>
    );
};

export default ManageOrders;