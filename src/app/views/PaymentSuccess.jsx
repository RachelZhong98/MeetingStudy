import React from "react";

const PaymentSuccess = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="https://www.hollisterco.com">
          Hollister
        </a>
      </nav>

      <main role="main">
        <div className="text-center">
          <div
            className="container"
            style={{
              marginTop: "15%",
            }}
          >
            <h1 className="display-4">Order Successfully Placed</h1>
            <p>
              Your order has been successfully placed. Thank you for shopping
              with Hollister.
            </p>
            <p>Order number: 46298489</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentSuccess;
