import useLanguage from '@/locale/useLanguage';
import { useMoney } from '@/settings';
import StripeModule from '@/modules/StripeModule';

export default function Stripe() {
  const translate = useLanguage();
  const entity = 'stripe';
  const disableAdd = true;
  const disableNewEntity = true;
  const { moneyFormatter } = useMoney();

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
      render: () => {
        return <button onClick={handleClick}>Pay</button>;
      },
    },
  ];

  const handleClick = () => {};

  const config = {
    dataTableColumns,
    entity,
    disableAdd,
    disableNewEntity,
  };

  return <StripeModule config={config}></StripeModule>;
}
