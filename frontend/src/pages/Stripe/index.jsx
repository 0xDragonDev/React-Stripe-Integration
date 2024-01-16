import dayjs from 'dayjs';
import { Tag } from 'antd';
import useLanguage from '@/locale/useLanguage';

import { useMoney } from '@/settings';
import StripeModule from '@/modules/StripeModule';

export default function Stripe() {
  const translate = useLanguage();
  const entity = 'stripe';
  const { moneyFormatter } = useMoney;

  const dataTableColumns = [
    {
      title: translate('Number'),
      dataIndex: 'number',
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
      title: translate('Total'),
      dataIndex: 'total',
      render: (total) => moneyFormatter({ amount: total }),
    },
  ];

  const config = {
    dataTableColumns,
    entity,
  };

  return <StripeModule config={config}></StripeModule>;
}
