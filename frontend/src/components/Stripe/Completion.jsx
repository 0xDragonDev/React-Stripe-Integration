function Completion() {
  // const [messageBody, setMessageBody] = useState('');
  // const dispatch = useDispatch();
  // const { result: stripePromise } = useSelector(selectPulishableKeyItems);

  // const dispatcher = () => {
  //   dispatch(erp.publishableKey);
  // };

  // useEffect(() => {
  //   dispatcher();

  //   if (!stripePromise) return;

  //   stripePromise.then(async (stripe) => {
  //     const url = new URL(window.location);
  //     const clientSecret = url.searchParams.get('payment_intent_client_secret');
  //     const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  //     setMessageBody(
  //       error ? (
  //         `> ${error.message}`
  //       ) : (
  //         <>
  //           &gt; Payment {paymentIntent.status}:{' '}
  //           <a
  //             href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`}
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             {paymentIntent.id}
  //           </a>
  //         </>
  //       )
  //     );
  //   });
  // }, [stripePromise]);

  return (
    <>
      <h1>Thank you!</h1>
      <a href="/">home</a>
      <p>Payment successful</p>
    </>
  );
}

export default Completion;
