import { useRouter } from 'next/navigation';
import { compose } from 'redux';

import { withAccountSelector } from '@/redux/slice/accountSlice/hoc';
import { Links } from '@/shared/constants';

const AuthRouteGuard = (props: any) => {
  const { accountInfo } = props;

  const router = useRouter();

  if (accountInfo.token) {
    return router.replace(Links.HOME);
  }

  return props.children;
};

const WrappedComponent = compose(withAccountSelector)(AuthRouteGuard);

export default WrappedComponent;
