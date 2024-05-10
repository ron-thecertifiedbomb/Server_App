import { Links } from '@/shared/constants';

export const promotions = [
  {
    id: 1,
    header: 'Discounts, discounts, and more discounts!',
    subText: '',
    color: '#FFF',
    buttonText: 'Enjoy vouchers up to 50% off!',
    buttonColor: '#E60C2B',
    buttonBorder: 'circle',
    buttonTextSize: '20px',
    buttonRedirection: Links.STUFF_SITE,
    position: 'center',
    backgroundImage: '/promotion-1.svg',
    backgroundColor: '#FF983F',
    showRightArrow: false,
  },
  {
    id: 2,
    header: 'Awesome deals are everywhere',
    subText: 'Easily find vouchers on all categories',
    color: '#000',
    buttonText: 'Browse for deals',
    buttonColor: '#009688',
    buttonBorder: 'rounded',
    buttonTextSize: '14px',
    buttonRedirection: '/search?filter=products-you-might-like',
    position: 'right',
    backgroundImage: '/promotion-2.svg',
    backgroundColor: '#26A69A',
    showRightArrow: true,
  },
];
