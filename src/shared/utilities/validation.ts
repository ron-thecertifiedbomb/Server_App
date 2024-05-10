import { Product, ProductVariationProps, Variation } from '../interfaces';

export const Validate = {
  email: () => {},
  phone: () => {},
};

/**
 * This function is used to determine if the user has selected the deepest layer of variation for a product.
 * Whether if the product is variations only or variation with subvariations.
 *
 * @param variationName product's variation name
 * @param subVariationName product's subvariation name
 * @param selectedVariants user's selected variant
 * @param selectedSubVariants user's selected subvariant
 * @returns isSelected and variant.
 * isSelected - boolean state if user has already selected.
 * variant - the selected variation/subvariation object.
 */
export const isVariantSelected = (
  variationName: string | null,
  subVariationName: string | null,
  selectedVariation: ProductVariationProps | null,
  selectedSubVariation: ProductVariationProps | null
) => {
  let isSelected: boolean;
  let variant: ProductVariationProps | null;

  if (variationName && !subVariationName && selectedVariation) {
    // if product has variations only and user selected a variant
    isSelected = true;
    variant = selectedVariation;
  } else if (variationName && subVariationName && selectedSubVariation) {
    // if product have both variations and subvariations and user selected subvariant
    isSelected = true;
    variant = selectedSubVariation;
  } else {
    variant = null;
    isSelected = false;
  }

  return { isSelected, variant };
};

/**
 * This function is used to pre-select a variant when going to product page.
 * It simply iterates through the variations and finds the first variant that has totalQuantity > 1
 * for product with variants only. Or the first variant that has subVariations that has totalQuantity > 1.
 *
 * @param variations variations object of the product
 * @returns variant object
 */
export const preSelectVariant = (variations: any) => {
  if (!variations) return null;

  let variation = variations.find((variant: ProductVariationProps) => {
    if (!variant.subVariation) {
      return variant.totalQuantity > 0; // Use return to exit the function immediately
    } else if (variant.subVariation) {
      const subVariant = variant.subVariation.find(
        (subVariant: ProductVariationProps) => subVariant.totalQuantity > 1
      );
      if (subVariant) {
        return subVariant;
      }
    }
  });

  return variation;
};

/**
 * Checker if the product has available stock. Meaning any of the totalQuantity
 * of the product - whether item-level totalQuantity, variation-totalQuantity, or
 * subVariation-totalQuantity should not be 0.
 *
 *
 * @param item product object.
 * @returns boolean or undefined - true meaning the product has stock, false or
 * undefined for product has no stock.
 */
export const isProductAvailable = (item: Product) => {
  const { variationName, subVariationName, variations } = item;

  let variationOnly = variationName && !subVariationName;
  let variationWithSubVariation = variationName && subVariationName;
  let singleProduct = !variationName && !subVariationName;

  if (variationWithSubVariation) {
    return variations?.find((variant: any) => {
      return variant.subVariation?.find(
        (subvariant: ProductVariationProps) => subvariant.totalQuantity > 1
      );
    });
  } else if (variationOnly) {
    return variations?.find((variant: any) => variant.totalQuantity > 1);
  } else if (singleProduct) {
    return item.totalQuantity === 0 ? false : true;
  }
};

/**
 * Checker if the product is single product has variations/subvariations.
 * @param variations
 * @returns boolean
 */
export const isSingleProduct = (variations: Variation[] | null) => {
  return !variations ? true : false;
};
