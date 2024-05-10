export interface RootObject {
  data: Data;
  isLogin: boolean;
  isSuccessful: boolean;
  message: string;
  statusCode: number;
}

export interface Data {
  products: Product[];
  total: number;
}

export interface Product {
  [key: string]: string | number | null | boolean | any | object; // Modify this as needed
  available: number;
  brand: null | string;
  categories: Categories;
  dateCreated: string;
  dateModified: string;
  description: string;
  discountType: number;
  images: Image[];
  inWishlist: number;
  isActive: number;
  metrics: Metrics;
  price: Price;
  productId: string;
  productName: string;
  productPriceProductID: string;
  productUrl: null | string;
  sellerId: string;
  shopName: string;
  sku: null | string;
  stats: Stats;
  subVariationName: null | string;
  totalQuantity: number;
  variationName: null | string;
  variations: Variation[] | null;
  warranty: string | null;
  wishlistId: string;
  withPrescription: boolean;
  other: Other;
  retailPrice: number;
  salesPrice: number;
  discountPrice: number;
  discountPercentage: number;
  image: string;
  rating: number;
}

export interface Other {
  isSameDayDelivery: boolean;
  isPickUpAtTheMezz: boolean;
  warranties: {
    returnDays: string | null;
    warranty: string | null;
    warrantyType: string | null;
  };
  deliveryTypes: [];
}

export interface Attributes {
  attribute1: null | string;
  attribute2: null | string;
  attribute3: null | string;
}

export interface Categories {
  category: string;
}

export interface Image {
  isCoverPhoto: boolean;
  originalPath?: string;
  path: string;
  uploadDate: string;
}

export interface Metrics {
  height: number;
  length: number;
  weight: number;
  width: number;
}

export interface Price {
  discountPercentage: number;
  discountPrice: number;
  discountType: number;
  endDate: null | string;
  quantity: number;
  retailPrice: number;
  minimumPrice?: number;
  salesPrice: number;
  startDate: null | string;
}

export interface Stats {
  addedToWishList: null | number;
  averageRating: number;
  bought: null | number;
  totalRating: number;
  views: null | number;
  ratingCounts: {
    star5: number;
    star4: number;
    star3: number;
    star2: number;
    star1: number;
  };
}

export interface Variation {
  discountPercentage: number;
  image: string;
  optionForVariation: string;
  productVariationId: string;
  subVariantPrice: number;
  subVariation?: SubVariation[];
  totalQuantity: number;
  variationSalesPrice: number;
}

export interface SubVariation {
  discountPercentage: number;
  productSubVariationId: string;
  subVariantOption: string;
}

export interface Reviews {
  dateReviewed: string;
  description: string;
  name: string;
  photos: string[];
  rating: number;
  reviewDescription: string;
  reviews: number;
  userImage: string;
  variation?: string;
  comment: string;
}

export interface ProductVariationProps {
  productVariationId?: string;
  productSubVariationId?: string;
  optionForVariation: string;
  subVariantOption?: string;
  image: string;
  totalQuantity: number;
  subVariantPrice: number;
  variationSalesPrice: number;
  discountPercentage: number;
  subVariation?: [] | null;
}

/** Search params */
export interface SearchParams {
  // onSale: boolean
  // featured: string
  // page: number
  // pageSize: number
  // search: string
  // minPrice: number
  // maxPrice: number

  onSale: boolean;
  featured: boolean;
  search: string;
  categories: any;
  subCategories: any;
  priceRangesId: any;
  minPrice: number;
  maxPrice: number;
  page: number;
  pageSize: number;
}
