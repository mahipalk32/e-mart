import React from "react";

export default function Header() {
    return (
        <div>
            <div style={{ height: "70px", background: "#5E1675", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <label style={{ margin: "20px", color: "white", cursor: "pointer" }}>E-COMMERSE</label>
                <div style={{ background: "aqua", borderRadius: "12px", height: "30px", width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <input style={{ border: "none", outline: "none", height: "30px", background: "none" }} type="search" placeholder="search product" />
                </div>
                <label style={{ margin: "20px", color: "white", cursor: "pointer" }}>Cart</label>
            </div>
            <ProductList />
        </div>
    )
}


function ProductList() {
    return (
        <div style={{ display: "flex", background: "#000000", color: "white", width: "100%", height: "50px", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "inline-block", alignItems: "center", width: "20%" }}><div style={{ display: "flex", justifyContent: "center" }}><strong><label>ProductList</label></strong></div></div>
            <div style={{ display: "inline-block", width: "80%" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <label style={{ cursor: "pointer" }}>Women Wear</label>
                    <label style={{ cursor: "pointer" }}>Mens Wear</label>
                    <label style={{ cursor: "pointer" }}>Kitchen</label>
                    <label style={{ cursor: "pointer" }}>Mobiles</label>
                    <label style={{ cursor: "pointer" }}>TV'S</label>
                    <label style={{ cursor: "pointer" }}>Watch</label>
                </div>
            </div>
        </div>
    )
}