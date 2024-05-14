import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notifySuccess } from "../utils";

export default function PaymentComplete()
{
    const { orderID } = useParams();
    const navigate = useNavigate()
    useEffect(()=> {
        notifySuccess("Payment Completed","Payment")
        navigate("/orders/" + orderID);
    })

    return (
        <></>
    )
}