import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckoutButton = (props) => {
  const { name } = props;
  const { price } = props;

  return (
    <PayPalButtons
      style={{
        color: "blue",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
    />
  );
};

export default PaypalCheckoutButton;
