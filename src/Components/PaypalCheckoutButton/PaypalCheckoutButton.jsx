import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { name } = props;
  const { price } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("thank you for your purchase");
  }

  if (error) {
    alert(error);
  }
  console.log(name, price);

  return (
    <PayPalButtons
      style={{
        color: "blue",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: name,
              amount: {
                value: price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.log("Paypal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
