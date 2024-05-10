// ts-ignore //
import { Images } from '@constants/';
import { faker } from '@faker-js/faker';
import { dateFormatter } from '@utils/Helpers';

import {
  ArrivalInterface,
  BannerImages,
  BrandCategory,
  BundleCollection,
  Cart,
  CategoryPageInterface,
  Collection,
  CollectionPageInterface,
  Orders,
  OrderStatus,
  PlaceDetails,
  Products,
  RatingsInterface,
  RecommendedItems,
  SaleInterface,
  TopSellerInterface,
  TotalProducts,
  VariationsWithoutSubVariant,
  VariationsWithSubVariant,
  Vouchers,
} from '../interface/Interface';

const images_portable_organizer = [
  'https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/dewalt-dwst17805-tstak-tool-expansion-portable-storage-organizer-box-portable-storage-organizer-box-1.jpg',
  'https://akr02.wiredcdn.com/getmedia/5b316f9f-5425-4179-8aa1-6863f8087f69/06115?maxsidesize=1200',
  'https://cf.shopee.ph/file/9b17466c8294f5913777bd9e926eb65e',
  'https://m.media-amazon.com/images/I/71DSIuuXOLL._AC_SY450_.jpg',
  'https://cf.shopee.ph/file/8599079491b85e29c827636e922aad30',
];
const images_stonewares = [
  'https://cdn.britannica.com/88/132288-050-74505F78/Pottery-people-clay-Hohokam-designs.jpg',
  'https://media.karousell.com/media/photos/products/2020/9/29/stoneware_set__gradient_brown_1601370918_3d2e0359_progressive.jpg',
  'https://static.toiimg.com/photo/msid-70753885/70753885.jpg?127128',
  'https://media.karousell.com/media/photos/products/2022/6/2/stonewares_1654159339_586d74a2_progressive.jpg',
  'https://chipstone.org/imgpublications/2/3/47/33.jpg',
];
const images_vacuum = [
  'https://www.zdnet.com/a/img/resize/53e9dfc5f55b82336f7eeff559885f8ea1252ff0/2022/06/10/1709a750-07a3-481c-bd51-bd3db4eb644c/cheap-vacuum-5.jpg?auto=webp&fit=crop&height=900&width=1200',
  'https://www.digitaltrends.com/wp-content/uploads/2020/09/eureka-neu180b-best-vacuums-1.jpg?p=1',
  'https://imageio.forbes.com/specials-images/imageserve/62e98c3c424ae5519c7b70bb/0x0.jpg?format=jpg&crop=1346,897,x15,y601,safe&width=1200',
  'https://www.panasonic.com/content/dam/pim/ph/en/MC/MC-SBV/MC-SBV01/ast-1332477.jpg.pub.thumb.644.644.jpg',
  'https://media.istockphoto.com/photos/dust-mites-dont-stand-a-chance-picture-id1254852664?k=20&m=1254852664&s=612x612&w=0&h=hs8jp5DB_A5xzurAYe-9wh9-nILZwgBdxQ856FUwVW8=',
];
const images_wax = [
  'https://draxe.com/wp-content/uploads/2020/12/SugarWaxThumbnail.jpg',
  'https://cdn.shopify.com/s/files/1/0987/6688/files/aromatic-candles-burn.jpg?v=1604003271',
  'https://www.tasteofhome.com/wp-content/uploads/2022/01/rebecca-peterson-hall-aN-zGYlxiCI-unsplash-1-scaled.jpg?fit=700,1024',
  'https://content.instructables.com/ORIG/FF3/FYEN/HSPP6QLX/FF3FYENHSPP6QLX.jpg?auto=webp',
  'http://cdn.shopify.com/s/files/1/0911/8940/articles/dsc1517-1657310226115_eb9d7c54-9ca4-480e-8b58-3507691fda98_1024x1024.jpg?v=1658930174',
];
const images_sofa = [
  'https://m.media-amazon.com/images/I/71GnkGqqkbL._AC_SL1000_.jpg',
  'https://cdn.shopify.com/s/files/1/0078/2555/5571/products/SofaProtectorBrown_fc302a66-2e30-4e94-be39-c6e76a1c7f67.png?v=1656406845',
  'https://d2e43a34qx5asz.cloudfront.net/catalog/product/cache/9903e74bdb2761d0dfeafc776997aeb4/u/r/urban-comfort-fleece-sofa-cover-dark-gray-with--multiple-size-variations.jpg',
  'https://img.fruugo.com/product/1/38/137118381_max.jpg',
  'https://ii1.pepperfry.com/media/catalog/product/t/e/800x880/teal-polyester-floral-3-seater-sofa-cover-by-cortina-teal-polyester-floral-3-seater-sofa-cover-by-co-lixicg.jpg',
];
const images_gloves = [
  'https://www.helikon-tex.com/media/catalog/product/cache/4/image/500x/17f82f742ffe127f42dca9de82fb58b1/r/k/rk-id2-ne-3501_3.jpeg',
  'https://www.salewa.com/media/image/8e/82/3d/eca604ef-27f8-4d8a-b649-3ae9bccdbaac_salewa.jpg',
  'https://media.solostove.com/transform/ac7698c1-f410-46c7-ab1c-0adcace3ac5a/FPCS_ACCESSORIES_Gloves-1',
  'https://oberalp.imgix.net/6361e523-552e-465f-b0a8-52e3e6b98089.png?auto=format',
  'https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw618540ce/images/full/9101001-Si/2022/9101001-Signature-Pro-Thermal-Gloves-og_rd.png',
];
const images_mask = [
  'https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1556267018304-QHLZL6XZK7P2KD86AEPY/Japanese-Facemasks.jpg?format=1000w',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-face-masks-every-skin-type-1585670190.png',
  'https://www.byrdie.com/thmb/G-xZShvLsPSQvQSu98OHUCMRfgE=/3427x2570/smart/filters:no_upscale()/portrait-of-a-young-woman-wearing-a-facial-mask-holding-a-slice-of-avocado-bldhs050039bty-57c7222b5f9b5829f45b2e38.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUJpdHSgDF3dZFHIgvozJhplAESJviXkbnQ&usqp=CAU',
  'https://victoriancosmetic.com.au/wp-content/uploads/2018/08/cosmedix-facial-mask-e1526963353131.png',
];

const images_health = [
  'https://media.cnn.com/api/v1/images/stellar/prod/220228152214-hollywood-jillian-dempsey-free-people.jpg?c=16x9&q=h_270,w_480,c_fill',
  'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/beauty_products_under_rs_999_that_trending_for_its_effortless_cool_uses.jpg',
  'http://images.summitmedia-digital.com/spotph/images/2018/08/20/aug-local-beauty-products-640.jpg',
  'https://post.healthline.com/wp-content/uploads/2022/04/2157816-The-7-Best-Vitamins-and-Supplements-for-Stress-According-to-Dietitians-732x549-Feature-732x549.jpg',
];
const images_electronics = [
  'https://ace.electronicsforu.com/wp-content/uploads/2018/02/consumer-electronic-products-880x362.jpg',
  'https://images.anandtech.com/doci/9770/X-T30_DSF5320_678x452.jpg',
  'https://ae01.alicdn.com/kf/U1c9126367688470583c70850e1cf88bd6/Smart-Watch-for-Women-Men-Fitness-Tracker-Square-Smartwatch-Electronics-Sport-Wrist-Watch-For-Android-IOS.jpg_Q90.jpg_.webp',
  'https://www.tcl.com/usca/content/dam/tcl/products/home-theater/3-series/s330/40S330_Angled-Left_720x480.png',
];
const images_bags = [
  'https://cf.ltkcdn.net/handbags/images/orig/262925-1600x1030-which-brands-designer-handbags-are-most-affordable.jpg',
  'https://www.ifdcouncil.org/wp-content/uploads/2016/06/4.-ifdc-designer-handbag-clean-tips-suede.jpg',
  'https://cf.shopee.ph/file/bae26d2d4ca33c6288bf55aced47417b',
  'https://cdn.cnn.com/cnnnext/dam/assets/210531181018-designer-handbag-investment-lead.jpg',
];
const images_travel = [
  'https://www.travelandleisure.com/thmb/NvDjWMETn-woiGXPnSqo4IH9gus=/1600x900/smart/filters:no_upscale()/carry-on-packing-essentials-CARRYON0618-68bedaf95e2e48069dc9acdcd975f5bd.jpg',
  'https://www.geekyexplorer.com/wp-content/uploads/2019/05/best-travel-accessories-items-to-pack.jpg',
  'https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2022_29/1891395/220718-packing-vl-2x1-social.jpg',
  'https://images.indagare.com/wp-content/uploads/170731_Indagare-1.jpg',
];
const images_decor = [
  'https://rukminim1.flixcart.com/image/416/416/kb5eikw0/showpiece-figurine/b/r/y/bvantiqueface001-beckon-venture-original-imafskb5fnqthfbd.jpeg?q=70',
  'https://stylecurator.com.au/wp-content/uploads/2019/06/Bookshelf-styling.jpg',
  'https://cdn.shopify.com/s/files/1/0096/4594/9013/files/Home_Decor_Items-1.jpg?v=1656324465',
  'https://cdn.shopify.com/s/files/1/0096/4594/9013/files/Home_Decor_Items-3.jpg?v=1656324523',
];
const images_lighting = [
  'https://static.toiimg.com/photo/msid-77345440/77345440.jpg',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/illuminated-pendant-lights-hanging-from-ceiling-royalty-free-image-1576719488.jpg',
  'https://cf.shopee.ph/file/5210f180f675127977e96d5cd874f000',
  'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/gen-workflow%2Fproduct-database%2FBedside_table_lamp',
];
const images_books = [
  'https://www.productplan.com/uploads/2017/05/books-for-product-managers.jpeg',
  'https://www.usertesting.com/sites/default/files/styles/hero_bg/public/wp-uploads/best-books-product-managers.jpg?itok=I1FekEvh',
  'https://miro.medium.com/max/1400/1*rxbIwpjhgXn306NeM2DHRw.png',
  'https://www.wiley.com/content/dam/wiley-dotcom/en/b2b/images/card/book-subketcs.png',
];
const images_bundles = [
  'https://media.istockphoto.com/photos/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-picture-id1208148708?k=20&m=1208148708&s=612x612&w=0&h=rjZiAPCOpwREiTET21lTP3wM30BUqAG9PjocC-euJ98=',
  'https://tadtoper.com/wp-content/uploads/2022/05/flat-lay-with-woman-fashion-accessories-in-yellow-32XUFEE.jpg',
  'https://thumbs.dreamstime.com/b/flat-lay-woman-fashion-accessories-yellow-colors-blog-summer-style-shopping-trends-idea-concept-170980088.jpg',
  'https://thumbs.dreamstime.com/b/fashion-flat-lay-french-style-girls-urban-outfit-t-shirt-ballerina-shoes-sunglasses-jeans-trendy-summer-shopping-concept-152519622.jpg',
];
const images_jewelries = [
  'https://media.istockphoto.com/photos/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-picture-id1216928523?k=20&m=1216928523&s=612x612&w=0&h=7RWivokctjPN8M6EitEk7dcMAKl2j9DDke3-g0fJtaQ=',
  'http://cdn.shopify.com/s/files/1/0618/8453/0847/products/img_proxy_1ce52fe3-0d83-46eb-a9e9-904a0bd9ad2d.jpg?v=1660627683',
  'https://www.goldrushjewelers.com/wp-content/uploads/2020/02/gemstone-decorated-rings-collection-ceylon-jewels.jpg',
  'https://orangeblossombride.com/wp-content/uploads/2019/09/IDC-AltamonteTacori.jpg',
];
const images_sports = [
  'https://basketballhq.com/wp-content/uploads/2017/11/Weighted-Basketball-Trainer.jpg',
  'https://static.sportzbusiness.com/uploads/2019/05/Racket-and-Shuttle.jpg',
  'https://cdn.shopify.com/s/files/1/0267/2646/5578/articles/custom_resized_9bde6df8-67f9-4ab4-820d-2e38bd399084_4472x.jpg?v=1611848055',
  'https://www.si.com/.image/t_share/MTg5MTk4NzI5MzY5NDI5OTA3/best-baseball-products_lead.png',
];

export const collection: Collection = {
  collections: Array(7)
    .fill(0)
    .map((item, index) => ({
      id: faker.datatype.string(11),
      image:
        index === 0
          ? Images.image_organizer
          : index === 1
            ? Images.image_stonewares
            : index === 2
              ? Images.image_vacuum
              : index === 3
                ? Images.image_wax
                : index === 4
                  ? Images.image_sofa
                  : index === 5
                    ? Images.image_gloves
                    : index === 6 && Images.image_facial,
      collectionName:
        index === 0
          ? 'Portable Organizer'
          : index === 1
            ? 'Stonewares'
            : index === 2
              ? 'Blast Vaccum'
              : index === 3
                ? 'Wax Melts & Diffusers'
                : index === 4
                  ? 'Sofa Protector'
                  : index === 5
                    ? 'Gloves'
                    : index === 6 && 'Argan Glow Aqua Mask',
      numberOfPurchases: faker.datatype.number({ min: 1000, max: 99999 }),
    })),
};

export const collection_page: CollectionPageInterface[] = Array(7)
  .fill(0)
  .map((item, idx) => ({
    collectionName:
      idx === 0
        ? 'Portable Organizer'
        : idx === 1
          ? 'Stonewares'
          : idx === 2
            ? 'Blast Vaccum'
            : idx === 3
              ? 'Wax Melts & Diffusers'
              : idx === 4
                ? 'Sofa Protector'
                : idx === 5
                  ? 'Gloves'
                  : idx === 6 && 'Argan Glow Aqua Mask',
    numberOfPurchases: faker.datatype.number({ min: 1000, max: 9999 }),
    brands: Array(5)
      .fill(0)
      .map((item, index) => ({
        id: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price(500, 1500, 2, '₱'),
        image:
          idx === 0
            ? images_portable_organizer[index]
            : idx === 1
              ? images_stonewares[index]
              : idx === 2
                ? images_vacuum[index]
                : idx === 3
                  ? images_wax[index]
                  : idx === 4
                    ? images_sofa[index]
                    : idx === 5
                      ? images_gloves[index]
                      : idx === 6 && images_mask[index],
      })),
  }));

export const category_page: CategoryPageInterface[] = Array(10)
  .fill(0)
  .map((item, idx) => ({
    categoryName:
      idx === 0
        ? 'Health & Beauty'
        : idx === 1
          ? 'Electronics'
          : idx === 2
            ? 'Bags'
            : idx === 3
              ? 'Travel'
              : idx === 4
                ? 'Decor'
                : idx === 5
                  ? 'Lighting'
                  : idx === 6
                    ? 'Books'
                    : idx === 7
                      ? 'Bundles'
                      : idx === 8
                        ? 'Jewelries'
                        : idx === 9 && 'Sports',
    products: Array(4)
      .fill(0)
      .map((item, index) => ({
        id: faker.datatype.uuid(),
        category: faker.commerce.productName(),
        sold: faker.finance.amount(100000, 600000),
        image:
          idx === 0
            ? images_health[index]
            : idx === 1
              ? images_electronics[index]
              : idx === 2
                ? images_bags[index]
                : idx === 3
                  ? images_travel[index]
                  : idx === 4
                    ? images_decor[index]
                    : idx === 5
                      ? images_lighting[index]
                      : idx === 6
                        ? images_books[index]
                        : idx === 7
                          ? images_bundles[index]
                          : idx === 8
                            ? images_jewelries[index]
                            : idx === 9 && images_sports[index],
      })),
  }));

export const mock_category: { categories: String[] } = {
  categories: [
    'Health & Beauty',
    'Electronics',
    'Bags',
    'Travel',
    'Decor',
    'Lighting',
    'Books',
    'Bundles',
    'Jewelries',
    'Sports',
  ],
};

export const arrival: ArrivalInterface = {
  total: 10,
  products: Array(10).fill({
    sellerId: faker.datatype.uuid(),
    productId: faker.datatype.uuid(),
    shopName: faker.company.name(),
    productName: faker.commerce.product(),
    description: faker.lorem.sentences(1),
    sku: faker.word.noun(4),
    available: faker.datatype.number({ min: 0, max: 100 }),
    wishlistId: faker.datatype.uuid(),
    inWishlist: false,
    images: [
      {
        fileName: '',
        path: faker.image.abstract(),
      },
    ],
    variations: [
      {
        productId: '',
        productVariationId: '',
        variationName: faker.word.noun(),
        optionForVariation: faker.word.noun(),
        variationPrice: faker.datatype.number({ min: 1, max: 100 }),
        variationQuantity: faker.datatype.number({ min: 1, max: 100 }),
        sku: faker.word.noun(4),
        shopSKU: faker.random.alpha(10),
      },
    ],
    price: {
      productPriceId: '',
      quantity: faker.datatype.number({ min: 1, max: 100 }),
      discountPrice: faker.datatype.number({ min: 50, max: 100 }),
      total: 0,
      retailPrice: faker.datatype.number({ min: 1, max: 100 }),
      discountPercentage: 0,
      salesPrice: faker.datatype.number({ min: 1, max: 100 }),
    },
    metrics: {
      productMetricsId: '',
      productId: '',
      weight: faker.datatype.float({ min: 0, max: 1, precision: 0.1 }).toString(),
      length: faker.datatype.float({ min: 0, max: 1, precision: 0.1 }).toString(),
      width: faker.datatype.float({ min: 0, max: 1, precision: 0.1 }).toString(),
      height: faker.datatype.float({ min: 0, max: 1, precision: 0.1 }).toString(),
    },
    categories: {
      category:
        mock_category.categories[Math.floor(Math.random() * mock_category.categories.length)],
    },
    attributes: {
      attribute1: '',
      attribute2: '',
      attribute3: '',
    },
    stats: {
      productAnalyticsId: '',
      productId: '',
      bought: 0,
      views: 0,
      addedToWishList: 0,
    },
    isActive: faker.datatype.boolean(),
    dateCreated: dateFormatter(faker.date.recent(10)),
  }),
};

export const topSeller: TopSellerInterface = {
  total: 3,
  topSeller: Array(3).fill({
    id: faker.random.alpha(11),
    image: faker.image.abstract(),
    productName: faker.commerce.product(),
    price: faker.finance.amount(1000, 10000, 2),
    numberOfPurchases: faker.datatype.number({ min: 1000, max: 20000 }),
    description: faker.lorem.sentence(6),
    rating: faker.datatype.number({ min: 1, max: 5 }),
    reviews: faker.datatype.number({ min: 1, max: 100 }),
  }),
};

export const sale: SaleInterface = {
  sale: {
    total: 7,
    startDate: dateFormatter(faker.date.recent(8)), // for past 1 week
    endDate: dateFormatter(faker.date.recent(1)), // for past day
    saleType: 'Flash',
    saleList: Array(7)
      .fill(0)
      .map(() => ({
        id: faker.random.alpha(11),
        image: faker.image.abstract(),
        productName: faker.commerce.product(),
        price: {
          retailPrice: faker.datatype.number({ min: 1000, max: 10000, precision: 0.01 }),
          salesPrice: faker.datatype.number({ min: 100, max: 5000 }),
          discountPercentage: faker.datatype.number({ min: 1, max: 100 }),
        },
        description: faker.lorem.sentence(),
        rating: faker.datatype.number({ min: 1, max: 5 }),
        reviews: faker.datatype.number({ min: 1, max: 100 }),
      })),
  },
};

export const ratings: RatingsInterface = {
  ratingsAndReviews: {
    total: 5,
    overall: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    reviews: Array(5).fill({
      userImage: faker.image.abstract(),
      name: faker.name.fullName(),
      dateReviewed: dateFormatter(faker.date.recent(10)),
      reviewDescription: faker.word.adjective(),
      rating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
      photos: [],
      description: faker.lorem.sentence(6),
      reviews: faker.datatype.number({ min: 1, max: 100 }),
    }),
  },
};

export const place_details: PlaceDetails = {
  id: '1',
  title: `${faker.address.cityName()}, ${faker.address.country()} `,
  coverImage: faker.image.abstract(),
  image: faker.image.abstract(),
  subTitle: faker.commerce.product(),
  distance: faker.datatype.number({ min: 1, max: 100 }),
  time: faker.datatype.number({ min: 1, max: 100 }),
  rating: faker.datatype.number({ min: 1, max: 5 }),
  dishSection: Array(5)
    .fill(0)
    .map((item, idx) => ({
      title: `Section ${idx + 1}`,
      data: Array(faker.datatype.number({ min: 3, max: 5 })).fill({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.lines(2),
        price: faker.commerce.price(5, 60),
        image: faker.image.abstract(640, 480, true),
      }),
    })),
};

const voucherTitleOptions = ['Free Shipping', '20% Off', '30% Off', '40% Off'];

export const vouchers: Vouchers[] = Array(9)
  .fill(0)
  .map(() => ({
    voucherId: faker.datatype.uuid(),
    voucherCode: faker.datatype.uuid(),
    image: faker.image.abstract(640, 480, true),
    voucherTitle: voucherTitleOptions[Math.floor(Math.random() * voucherTitleOptions.length)], // ["Free Shipping", "₱100"]
    details: `₱ ${faker.datatype.number({ min: 100, max: 1000 })} worth of purchase from this shop`, // ['₱ 500 worth of purchase from this shop']
    shippingFee: faker.datatype.number({ min: 100, max: 500 }),
    expirationDate: dateFormatter(faker.date.soon(30)),
    freeShipping: faker.datatype.boolean(),
    applicable: faker.datatype.boolean(),
    isRedeem: false, //faker.datatype.boolean(),
    isSitewide: faker.datatype.boolean(), // [true if h2h voucher, false if seller(shop) voucher]
    percentOff: voucherTitleOptions[Math.floor(Math.random() * voucherTitleOptions.length)], // 20% off, 50% off
    amountOff: faker.datatype.number({ min: 0, max: 100 }),
  }));

export const recommended_items: RecommendedItems = {
  item_category: Array(4)
    .fill(0)
    .map((item, index) => ({
      id: faker.random.alphaNumeric(11),
      image: faker.image.abstract(640, 480, true),
      category: mock_category.categories[index + 1].toString(),
      sold: faker.datatype.number({ min: 100, max: 100000 }).toString(),
    })),
};

export const brand_category: BrandCategory = {
  brand_category: Array(2)
    .fill(0)
    .map(() => ({
      id: faker.random.alphaNumeric(11),
      image: faker.image.abstract(640, 480, true),
      brand: faker.commerce.productAdjective(),
    })),
};

export const bundle_collection: BundleCollection = {
  bundles: Array(3)
    .fill(0)
    .map((item, index) => ({
      id: faker.random.alphaNumeric(11),
      image: faker.image.abstract(640, 480, true),
      bundleName: `Bundle ${index + 1} Sample`,
      numberOfPurchases: faker.datatype.number({ min: 100, max: 100000 }),
    })),
};

export const sample_search: { recent: String[] } = {
  recent: Array(43)
    .fill(0)
    .map(() => faker.name.firstName()),
};

export const products: TotalProducts = {
  total: 2,
  products: Array(2).fill({
    productId: faker.datatype.uuid(),
    productName: faker.commerce.product(),
    shopName: faker.company.name(),
    description: faker.commerce.productDescription(),
    available: faker.datatype.number({ min: 0, max: 20 }),
    images: [
      {
        path: faker.image.imageUrl(1234, 2345, 'fries', true),
        isCoverPhoto: faker.datatype.boolean(),
        uploadDate: dateFormatter(faker.date.recent()),
      },
    ],
    price: {
      quantity: faker.datatype.number({ min: 10, max: 100 }),
      discountType: faker.datatype.float({ min: 0, max: 100, precision: 0.01 }),
      discountPrice: faker.datatype.float({ min: 0, max: 100, precision: 0.01 }),
      startDate: dateFormatter(faker.date.recent(10)),
      endDate: dateFormatter(faker.date.recent(2)),
      retailPrice: faker.datatype.number({ min: 10, max: 100 }),
    },
    metrics: {
      weight: faker.datatype.float({ min: 1, max: 50, precision: 0.01 }),
    },
    categories: {
      category:
        mock_category.categories[
        faker.datatype.number({ min: 1, max: mock_category.categories.length })
        ],
    },
    warranty: {
      returnDays: faker.datatype.number({ min: 0, max: 10 }),
      warrantyType: 'Manufacturer Warranty',
    },
    isActive: faker.datatype.boolean(),
    dateCreated: faker.date.recent(20),
  }),
};

export const Notifications = [
  {
    id: 1,
    title: 'Your pizza order placed successfully',
    details: 'Your pizza order to snack corner has been accepted and being processed.',
    shopName: 'Shop One',
  },
  {
    id: 2,
    title: 'Your bengali thali order has been delivered',
    details: 'Your bengali thali has been delivered by Delicious Bong Recipe.',
    shopName: 'Shop One',
  },
  {
    id: 3,
    title: 'Out for delivery',
    details: 'Bengali thali will reach to you within 30 minutes.',
    shopName: 'Shop Two',
  },
  {
    id: 4,
    title: 'Your bengali thali order placed successfully',
    details:
      'Your bengali thali order to Delicious Bong Recipe has been accepted and being processed.',
    shopName: 'Shop Two',
  },
  {
    id: 5,
    title: 'Money added to your wallet',
    details:
      '₹ 1,000/- has been added to your wallet successfully and remaining balance is ₹ 1,150/-',
    shopName: 'Shop Three',
  },
  {
    id: 6,
    title: 'Add money to your wallet',
    details:
      'Only ₹ 150/- is left in your wallet. Add some more amount to place your order quickly.',
    shopName: 'Shop Four',
  },
  {
    id: 7,
    title: 'Check new Pizza Corner within 1 km',
    details: 'A new Pizza Corner is being loved by more people around you.',
    shopName: 'Shop Four',
  },
  {
    id: 8,
    title: 'Check new Roll Center within 3 km',
    details: 'A new roll center is being loved by more people around you.',
    shopName: 'Shop Four',
  },
  {
    id: 9,
    title: 'Check new Crispy Chicken within 3 km',
    details: 'A new Crispy Chicken is being loved by more people around you.',
    shopName: 'Shop One',
  },
  {
    id: 10,
    title: 'Check new Snacks Corner within 5 km',
    details: 'A new Snacks Corner is being loved by more people around you.',
    shopName: 'Shop Two',
  },
];

export const cart: Cart[] = Array(4).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(2)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(7),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: faker.date.recent(20),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 1, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }).toString(),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Days Replacement`,
        warrantType: 'Manufacturer Warranty',
        warrantyPolicy: 'This is Iphone',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: faker.date.recent(20),
    })),
});

export const cart_ship: Cart[] = Array(1).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(1)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(7),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: faker.date.recent(20).toString(),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 0, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      attributes: {
        attribute1: faker.word.noun(),
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }).toString(),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Day/s Replacement`,
        warrantType: 'Manufacturer Warranty',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: dateFormatter(faker.date.recent(20)),
    })),
});

export const cart_pay: Cart[] = Array(1).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(2)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(7),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: dateFormatter(faker.date.recent(20)),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 0, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      attributes: {
        attribute1: faker.word.noun(),
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Days Replacement`,
        warrantType: 'Manufacturer Warranty',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: dateFormatter(faker.date.recent(20)),
    })),
});

export const cart_receive: Cart[] = Array(1).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(2)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(7),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: faker.date.recent(20),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 0, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }).toString(),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Days Replacement`,
        warrantType: 'Manufacturer Warranty',
        serviceLevelAgreement: 'No refunds',
        warrantPolicy: 'This is iphone',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: faker.date.recent(20),
    })),
});

export const cart_review: Cart[] = Array(2).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(2)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(9),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: dateFormatter(faker.date.recent(20)),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 0, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }).toString(),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Days Replacement`,
        warrantType: 'Manufacturer Warranty',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: dateFormatter(faker.date.recent(20)),
    })),
});

export const cart_return: Cart[] = Array(2).fill({
  sellerId: faker.datatype.uuid(),
  shopName: 'Hub2Home',
  products: Array(1)
    .fill(0)
    .map(() => ({
      productId: faker.datatype.uuid(),
      productName: faker.commerce.product(),
      shopName: 'Hub2Home',
      description: faker.lorem.sentence(12),
      sku: faker.word.noun(9),
      brand: faker.word.noun(9),
      available: faker.datatype.number({ min: 0, max: 10 }),
      images: [
        {
          path: faker.image.imageUrl(),
          isCoverPhoto: faker.datatype.boolean(),
          uploadDate: dateFormatter(faker.date.recent(20)),
        },
      ],
      variations: [],
      price: {
        quantity: faker.datatype.number({ min: 0, max: 10 }),
        discountType: faker.datatype.number({ min: 0, max: 10 }),
        discountPrice: faker.datatype.number({ min: 0, max: 10 }),
        retailPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
        discountPercentage: `${faker.datatype.number({ min: 0, max: 10 })}%`,
        salesPrice: faker.datatype.float({ min: 0, max: 1000, precision: 0.01 }),
      },
      metrics: {
        weight: faker.datatype.float({ min: 0, max: 50, precision: 0.01 }),
      },
      categories: {
        category: mock_category.categories[faker.datatype.number({ min: 0, max: 9 })],
      },
      warranty: {
        returnDays: faker.datatype.number({ min: 0, max: 9 }).toString(),
        warranty: `${faker.datatype.number({ min: 0, max: 9 })} Days Replacement`,
        warrantType: 'Manufacturer Warranty',
        serviceLevelAgreement: 'No refunds.',
        warrantyPolicy: 'This is Iphone',
      },
      isActive: faker.datatype.boolean(),
      dateCreated: faker.date.recent(20),
    })),
});

export const orders: Orders[] = Array(1).fill({
  total: faker.datatype.number({ min: 0, max: 10 }),
  order: Array(2)
    .fill(0)
    .map(() => ({
      sellerId: faker.datatype.uuid(),
      shopName: 'Hub2Home',
      orderId: faker.datatype.uuid(),
      referenceNo: faker.datatype.uuid(),
      isValidToCancel: faker.datatype.boolean(),
      shippingOption: 'LBC',
      paymentOption: 'Cash on Delivery',
      orderTotal: faker.datatype.number({ min: 1, max: 10 }), // per shop
      shippingFeeTotal: faker.datatype.number({ min: 50, max: 500 }), // per shop
      products: {
        orderId: faker.datatype.uuid(),
        referenceNo: faker.datatype.uuid(),
        sellerId: faker.datatype.uuid(),
        productId: faker.datatype.uuid(),
        orderTotalPerItem: faker.datatype.number({ min: 1, max: 1000 }),
        quantity: faker.datatype.number({ min: 1, max: 10 }),
        productName: faker.commerce.product(),
        shopName: 'Hub2Home',
        description: faker.lorem.sentence(),
        sku: faker.word.noun(),
        brand: faker.word.noun(),
        available: faker.datatype.number({ min: 1, max: 10 }),
        wishListId: '',
        voucherCode: '',
        totalPayment: faker.datatype.number({ min: 1, max: 10 }),
      },
    })),
});

export const variations_with_subvariant: VariationsWithSubVariant[] = Array(2)
  .fill(0)
  .map(() => ({
    variationName: faker.commerce.product(),
    image: faker.image.abstract(1234, 2345, true),
    variationOptions: Array(4)
      .fill(0)
      .map((item, index) => ({
        productVariationId:
          index === 0
            ? '362B5F01-Small'
            : index === 1
              ? '362B5F02-Medium'
              : index === 2
                ? '362B5F02-Large'
                : index === 3 && '362B5F02-XLarge',
        optionForVariation:
          index === 0
            ? 'Small'
            : index === 1
              ? 'Medium'
              : index === 2
                ? 'Large'
                : index === 3 && 'XLarge',
        variationPrice: faker.datatype.number({ min: 50, max: 200 }),
        totalQuantity: faker.datatype.number({ min: 0, max: 50 }),
        variationSalesPrice: faker.datatype.number({ min: 10, max: 100 }),
      })),
  }));

export const variations_without_subvariant: VariationsWithoutSubVariant = {
  variationName: 'Color',
  subVariantName: null,
  variants: Array(4)
    .fill(0)
    .map(() => ({
      name: faker.color.human(),
      uri: faker.image.abstract(1234, 2345, true),
      stocks: faker.datatype.number({ min: 1, max: 200 }),
      subVariants: null,
    })),
};

// Pharmacy

const mock_pharma_products_names = [
  'Vitamin A',
  'Vitamin B',
  'Skin Toner for Anti-Acne Serum',
  'Face Moisturizer for moisturized skins',
  'Antibiotics for pain relief',
  'Daily supplements for weight gain and protein supply',
  'Insulin shot emergencies only (store within cool temperature)',
];
const mock_pharma_products_images = [
  'https://4.imimg.com/data4/XI/PQ/MY-8155059/vitamin-a-supplement-500x500.jpg',
  'https://www.biovea.com/ph/images/products/xlrg/2769_z.jpg',
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664898681-s2286375-main-zoom-1664898675.jpg?crop=1xw:1xh;center,top&resize=480:*',
  'https://cdn.cliqueinc.com/posts/285756/best-skincare-brands-285756-1582682027978-main.700x0c.jpg',
  'https://medlineplus.gov/images/AntibioticsAndAbscess_share.jpg',
  'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324479/blue-and-white-pills.jpg',
  'https://149777215.v2.pressablecdn.com/wp-content/uploads/2016/07/Campbell071116.jpg',
];

export const mock_pharma_products: Products[] = Array(7)
  .fill(0)
  .map((item, index) => ({
    sellerId: faker.datatype.uuid(),
    productId: faker.datatype.uuid(),
    shopName: 'Vitamin Seller',
    productName: mock_pharma_products_names[index],
    description: faker.lorem.paragraph(),
    sku: faker.datatype.uuid(),
    available: faker.datatype.number(),
    totalQuantity: faker.datatype.number(),
    inWishlist: false,
    wishlistId: faker.datatype.string(),
    images: [
      {
        fileName: faker.datatype.string(),
        path: mock_pharma_products_images[index],
      },
    ],
    variations: [
      {
        variationName: 'Quantity',
        image: '',
        variationOptions: [
          {
            productVariationId: faker.datatype.uuid(),
            optionForVariation: '1 Dozen',
            variationPrice: 600,
            variationSalesPrice: 570,
            totalQuantity: 597,
          },
          {
            productVariationId: faker.datatype.uuid(),
            optionForVariation: '100 tablets',
            variationPrice: 600,
            variationSalesPrice: 570,
            totalQuantity: 597,
          },
        ],
      },
    ],
    price: {
      productPriceId: faker.datatype.string(),
      quantity: 1,
      discountPrice: 0,
      startDate: faker.date.recent.toString(),
      total: 0,
      retailPrice: 900.78,
      discountPercentage: 0,
      salesPrice: 900.78,
    },
    metrics: [
      {
        productMetricsId: faker.datatype.uuid(),
        productId: faker.datatype.uuid(),
        weight: faker.datatype.number(),
        length: faker.datatype.number(),
        width: faker.datatype.number(),
        height: faker.datatype.number(),
      },
    ],
    categories: {
      category: 'Pharmacy',
    },
    attributes: [
      {
        attribute1: faker.lorem.sentence(),
        attribute2: faker.lorem.sentence(),
        attribute3: faker.lorem.sentence(),
      },
    ],
    stats: [
      {
        productAnalyticsId: faker.datatype.uuid(),
        productId: faker.datatype.uuid(),
        bought: 0,
        views: 0,
        addedToWishList: 0,
      },
    ],
    isActive: false,
    withPrescription: true,
    dateCreated: faker.date.recent.toString(),
  }));

const pharma_category_names = [
  'Skin Care',
  'Oral Care',
  'OTC Medicines',
  'Prescription Medicines (Rx)',
  'Medical Devices',
  'Medical Supplies',
  'Supplements',
  'Vitamins',
  'Nutrition',
  'Herbal',
];

const pharma_category_images = [
  'https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg',
  'https://cdn.sanity.io/images/0vv8moc6/dpr/66c8d4cdbe77f140b56253286d78d6b79449e433-640x380.png?fit=crop&auto=format',
  'https://www.iwpharmacy.com/hubfs/Over_the_counter.jpg',
  'https://watsonshealth.com.ph/wp-content/uploads/2019/06/13-PRESCRIPTION-MEDICATIONS.jpg',
  'https://www.azom.com/images/Article_Images/ImageForArticle_18590(1).jpg',
  'https://lzd-img-global.slatic.net/live/ph/p/f1fd09995f2842bd221165902bd0ae3c.jpg_720x720q80.jpg_.webp',
  'https://images.everydayhealth.com/images/lung-respiratory/asthma/cs-asthma-nutrients-help-1440x810.jpg',
  'https://www.news-medical.net/image.axd?picture=2020%2F3%2Fshutterstock_791810890.jpg',
  'https://api.benefits.gov//sites/default/files/2020-07/gTzwhti%20-%20Imgur.jpg',
  'https://jamaicahospital.org/newsletter/wp-content/uploads/2014/08/herbal-remedies3.jpg',
];

export const mock_pharma_categories = Array(10)
  .fill(0)
  .map((item, index) => ({
    categoryName: pharma_category_names[index],
    products: [],
    categoryImage: pharma_category_images[index],
  }));

export const mock_pharma_banner: BannerImages[] = [
  {
    promotionId: faker.datatype.uuid(),
    sellerId: faker.datatype.uuid(),
    productId: faker.datatype.uuid(),
    fileName: faker.datatype.string(),
    filePath: Images.image_banner_ad,
    fileUploadDate: '07/18/2022 22:03:25',
  },
];

const pharama_subcategory = [
  'Supplements',
  'Sports',
  'Bath',
  'Beauty',
  'Women',
  'Men',
  'Kids',
  'Organic',
];

export const mock_pharma_category_item = {
  productReferenceId: faker.datatype.uuid(),
  name: 'Stuff Pharmacy',
  image: Images.ic_pharma,
  referenceType: 'PROD_CATEGORY',
  subCategories: Array(8)
    .fill(0)
    .map((item, index) => ({
      productReferenceId: faker.datatype.uuid(),
      name: pharama_subcategory[index],
      image: '',
      referencType: 'PROD_SUB_CAT',
    })),
};

export const mock_shop_data = {
  city: faker.address.cityName(),
  country: faker.address.country(),
  lastSeen: faker.datatype.number({ min: 1, max: 24 }),
  followers: `${(faker.datatype.float({ min: 1000, max: 20000 }) / 1000).toFixed(1)}`,
  ratings: faker.datatype.number({ min: 100, max: 500 }),
  totalProducts: `${(faker.datatype.float({ min: 1000, max: 20000 }) / 1000).toFixed(1)}`,
};

// const orderStatus = ['Delivered', 'To Ship', 'Preparing'];

export const mock_order_history: OrderStatus[] = [
  {
    orderId: faker.datatype.uuid(),
    trackingNumber: faker.datatype.uuid(),
    statusId: faker.datatype.number(),
    status: 'Delivered',
    description: 'Parcel has been delivered from hub to your home',
    dateCreated: '02-09-2023 03:57',
  },
];
