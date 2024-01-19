import { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { loadStripe } from '@stripe/stripe-js';
import StripeModule from '@/modules/StripeModule';
import { useMoney } from '@/settings';
import useLanguage from '@/locale/useLanguage';

export default function Stripe() {
  const entity = 'stripe';
  const disableAdd = true;
  const disableNewEntity = true;

  const { moneyFormatter } = useMoney();
  const [modalOpen, setModalOpen] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const translate = useLanguage();

  const dataTableColumns = [
    {
      title: translate('Number'),
      dataIndex: 'index',
    },
    {
      title: translate('Client'),
      dataIndex: ['client', 'name'],
    },
    {
      title: translate('Client Type'),
      dataIndex: ['client', 'type'],
    },
    {
      title: translate('Client Email'),
      render: (data) => data.client[data.client.type].email,
    },
    {
      title: translate('Total'),
      dataIndex: 'total',
      render: (total) => moneyFormatter({ amount: total }),
    },
    {
      title: '',
      render: (record) => {
        return (
          <Button type="primary" onClick={() => handlePayButtonClick(record.total)}>
            Pay
          </Button>
        );
      },
    },
  ];

  const fetchData = async (total) => {
    await axios.get('/config').then((res) => {
      setStripePromise(loadStripe(res.data));
    });

    await axios.post('/create-payment-intent', { money: total }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  };

  const handlePayButtonClick = async (total) => {
    await fetchData(total).then(() => setModalOpen(true));
  };

  const config = {
    dataTableColumns,
    entity,
    disableAdd,
    disableNewEntity,
    modalOpen,
    setModalOpen,
    stripePromise,
    clientSecret,
  };

  return <StripeModule config={config}></StripeModule>;
}
