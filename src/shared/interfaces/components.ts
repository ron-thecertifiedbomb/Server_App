import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  CSSProperties,
  HTMLInputTypeAttribute,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { SwiperOptions } from 'swiper/types';

import { ButtonTypes, IconTypes, InputTypes } from '../enums';

import { Product, ProductVariationProps, Variation } from '.';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | ButtonTypes.DEFAULT
    | ButtonTypes.PRIMARY
    | ButtonTypes.SECONDARY
    | ButtonTypes.DANGER
    | ButtonTypes.TRANSPARENT;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textClassName?: string;
  buttonClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText: string;
}

export interface TextInputProps {
  id?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  name?: string;
  className?: string;
  value?: string;
  type?: InputTypes.TEXT | InputTypes.PASSWORD | InputTypes.EMAIL;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onEnter?: Function;
  disabled?: boolean;
  maxLength?: number;
  inputType?: HTMLInputTypeAttribute | undefined;
  style?: CSSProperties;
}

export interface ImageHolderProps {
  image: string;
  alt: string;
  style?: CSSProperties;
}

export interface ImageHolderSize {
  width: number;
  height: number;
}

export interface ListProps {
  items: any[];
  renderItem: Function;
  style?: CSSProperties;
}

export interface ParagraphProps {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TextProps {
  children: ReactNode;
  style?: CSSProperties;
}

export interface TitleProps {
  children: ReactNode;
  style?: CSSProperties;
}

export interface AuthNavigationButtonItem {
  id: number;
  name: string;
  link: string;
}
export interface ContainerProps {
  children?: ReactNode;
  breakpoint?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface SwiperProps {
  id?: string;
  className?: string;
  items: Array<any>;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  thumbnail?: boolean;
  thumbsSwiper?: any;
  delay?: number;
  loop?: boolean;
  renderItem: Function;
  itemsPerView?: number;
  breakpoints?: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions };
  spaceBetween?: number;
}

export interface IconProps {
  type?:
    | IconTypes.MATERIAL
    | IconTypes.MATERIAL_OUTLINED
    | IconTypes.MATERIAL_ROUND
    | IconTypes.MATERIAL_SHARP
    | IconTypes.MATERIAL_TWO_TONE;
  icon: string;
  className?: string;
  sx?: CSSProperties;
}

export interface ProductListProps {
  products: Array<Product>;
  itemsPerView?: number;
  className?: string;
}

export interface VariationOptionProps {
  variations: any[] | null;
  variationName: string | null;
  selectedVariation: ProductVariationProps | null;
  setSelectedVariation: Function;
  setSelectedVariant: Function;
  setSelectedSubVariation: Function;
  setUserQuantity: Function;
}

export interface SubVariationOptionProps {
  subVariationName: string | null;
  selectedVariation: ProductVariationProps | null;
  selectedSubVariation: ProductVariationProps | null;
  setSelectedSubVariation: Function;
  setSelectedVariant: Function;
  setUserQuantity: Function;
}

export interface EditQuantityProps {
  product: Product;
  variations: Variation[] | null;
  variationName: string | null;
  subVariationName: string | null;
  selectedVariation: ProductVariationProps | null;
  selectedSubVariation: ProductVariationProps | null;
  userQuantity: number;
  setUserQuantity: Function;
}

export interface ShareDialogProps {
  open: boolean;
  productId: string;
  onClose: () => void;
  onClickClose: () => void;
}

export interface SellerDialogProps {
  open: boolean;
  onClose: () => void;
}

export interface PDFDialogProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

export interface PDFViewerProps {
  url: string;
}

export interface CalendarDialogProps {
  value: string;
  open: boolean;
  onClose: () => void;
  onClickClose: () => void;
  onChange: (value: any) => typeof value;
}

export interface PasswordInputProps {
  placeholder?: string;
  value: string;
  onEnter?: Function;
  textInputClassname?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  showPasswordStrength?: boolean;
  eyeColor?: string;
  passwordStrengthClassName?: string;
}

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export interface ProductCardProps {
  product: Product;
}

export interface PinInputProps {
  disabled?: boolean;
  length?: number;
  onChange: Function;
  error?: { data: Object };
}

export interface ScrollToTopProps {
  target?: string | null;
}
