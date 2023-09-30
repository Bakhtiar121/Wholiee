function OrderConfirmation() {
  return (
    <table
      align="center"
      border="0"
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={{ maxWidth: 600 }}
    >
      <tbody
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <tr>
          <td
            align="center"
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              paddingTop: 25,
            }}
          >
            <img
              src="https://img.icons8.com/carbon-copy/100/000000/checked-checkbox.png"
              width="125"
              height="120"
              alt="checkbox"
              style={{ display: "block", border: 0 }}
            />
            <br />
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                lineHeight: "36px",
                color: "#333333",
                margin: 0,
              }}
            >
              Thank You For Your Order!
            </h2>
          </td>
        </tr>
        <tr>
          <td
            align="left"
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              paddingTop: 10,
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                color: "#777777",
              }}
            >
              We will update you about your order through the email you have
              provided during checkout.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default OrderConfirmation;
