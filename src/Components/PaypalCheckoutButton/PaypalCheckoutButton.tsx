import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  name: string;
  price: number;
}

const PaypalCheckoutButton = (props: Props) => {
  const { name } = props;
  const { price } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId: string) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("thank you for your purchase");
  }

  if (error) {
    alert(error);
  }

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
                value: price.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onError={(err: any) => {
        setError(err);
        console.log("Paypal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
