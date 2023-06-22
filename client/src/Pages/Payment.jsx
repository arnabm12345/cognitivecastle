import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { studentLogout } from "../redux/action/studentAction";
import { useState } from "react";
function Payment() {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()


  return (
    <div>
        {store.student.isAuthenticated ? <>
    <div className=""  style={{display:'flex',alignItems:'center'}}>
        <div style={{alignItems:'center',marginLeft:'35vw',marginTop:'30vh'}}>
      <h2>Please Pay the Fees to</h2>
      <h2>continue using our Services</h2>
      <p style={{marginTop:'15px'}}>
       <h4>Price: $200</h4>
       <p>Validity : 1 month</p>
      </p>
      <PayPalScriptProvider
        options={{ "client-id": "AfM1-seVknsuDr0U2Y84wrVGl5KyMBFm1rhLVnDitVuJzPrFkNi7_ZUv0VI27srRrlRFR-L3x5_ITvjP" }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "200",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            await fetch(
                `http://localhost:5000/api/student/updateDate/${store.student.student.student.registrationNumber}`
              )
              alert("Transaction completed.Please Login Again to access the course ");
              dispatch(studentLogout())
              history.push('/')
          }}
        />
      </PayPalScriptProvider>
      </div>
    </div> </>: (history.push('/'))}
    </div>
  );
}

export default Payment;