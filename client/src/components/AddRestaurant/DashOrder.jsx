import React from 'react';

const DashOrder = () => {
    return (
        <section
            className="orders-section"
            style={{
                fontFamily: "Arial, sans-serif",
                padding: "20px",
                backgroundColor: "#fef9f7",
            }}
        >
            <h3
                style={{
                    textAlign: "center",
                    color: "#d9232d",
                    borderBottom: "3px solid #d9232d",
                    display: "inline-block",
                    paddingBottom: "5px",
                }}
            >
                Order Summary
            </h3>
            <br />
            <br />
            <div
                className="order-list"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Order Item */}
                <div
                    className="order-item"
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        maxWidth: "600px",
                        width: "100%",
                    }}
                >
                    <img
                        src="https://www.pdffiller.com/preview/449/952/449952865/large.png"
                        alt="PAGE SLIP"
                        style={{
                            width: "100%",
                            borderRadius: "5px",
                            marginBottom: "15px",
                        }}
                    />
                    <p><strong>Guest Name:</strong> Sambhav Jain</p>
                    <p><strong>Hotel:</strong> A1 Home Made</p>
                    <p><strong>Check-in:</strong> Oct 11, 2017</p>
                    <p><strong>Check-out:</strong> Oct 12, 2017</p>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginTop: "15px",
                            marginBottom: "15px",
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#f7f7f7", textAlign: "left" }}>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    Room Charges
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rs. 1869</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    GST
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rs. 227</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    Discounts
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rs. 582</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    Convenience Fees
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rs. 106</td>
                            </tr>
                            <tr>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    Net Amount Paid
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>Rs. 1524</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><strong>Booking ID:</strong> HTLVKU28VU</p>
                    <p><strong>Room Type:</strong> Deluxe Room</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
                        }}
                    >
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#d9232d",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Print Receipt
                        </button>
                        <button
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#f7b731",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Cancel Booking
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashOrder;
