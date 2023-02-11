import { DocumentNode } from "graphql-typed";
import { URL, Decimal, CurrencyCode } from "../node_modules/@shopify/shop-minis-platform-sdk/src/api/types";
export namespace QuickstartTestProductsQueryPartialData {
  export interface ShopProductsByIdsFeaturedImage {
    __typename?: "Image" | null;
    id?: string | null;
    altText?: string | null;
    url?: URL | null;
  }
  export interface ShopProductsByIdsDefaultVariantCompareAtPrice {
    __typename?: "Money" | null;
    amount?: Decimal | null;
    currencyCode?: CurrencyCode | null;
  }
  export interface ShopProductsByIdsDefaultVariantPrice {
    __typename?: "Money" | null;
    amount?: Decimal | null;
    currencyCode?: CurrencyCode | null;
  }
  export interface ShopProductsByIdsDefaultVariantImage {
    __typename?: "Image" | null;
    id?: string | null;
    altText?: string | null;
    url?: URL | null;
  }
  export interface ShopProductsByIdsDefaultVariant {
    __typename?: "ProductVariant" | null;
    id?: string | null;
    title?: string | null;
    isFavorited?: boolean | null;
    compareAtPrice?: QuickstartTestProductsQueryPartialData.ShopProductsByIdsDefaultVariantCompareAtPrice | null;
    price?: QuickstartTestProductsQueryPartialData.ShopProductsByIdsDefaultVariantPrice | null;
    image?: QuickstartTestProductsQueryPartialData.ShopProductsByIdsDefaultVariantImage | null;
  }
  export interface ShopProductsByIds {
    __typename?: "Product" | null;
    id?: string | null;
    title?: string | null;
    tags?: (string | null)[] | null;
    featuredImage?: QuickstartTestProductsQueryPartialData.ShopProductsByIdsFeaturedImage | null;
    defaultVariant?: QuickstartTestProductsQueryPartialData.ShopProductsByIdsDefaultVariant | null;
  }
  export interface Shop {
    __typename?: "Shop" | null;
    id?: string | null;
    name?: string | null;
    productsByIds?: (QuickstartTestProductsQueryPartialData.ShopProductsByIds | null)[] | null;
  }
}
export interface QuickstartTestProductsQueryPartialData {
  shop?: QuickstartTestProductsQueryPartialData.Shop | null;
}
export namespace QuickstartTestProductsQueryData {
  export interface Variables {
    shopId: string;
    productIds: string[];
  }
  export interface ShopProductsByIdsFeaturedImage {
    __typename: "Image";
    id?: string | null;
    altText?: string | null;
    url: URL;
  }
  export interface ShopProductsByIdsDefaultVariantCompareAtPrice {
    __typename: "Money";
    amount: Decimal;
    currencyCode: CurrencyCode;
  }
  export interface ShopProductsByIdsDefaultVariantPrice {
    __typename: "Money";
    amount: Decimal;
    currencyCode: CurrencyCode;
  }
  export interface ShopProductsByIdsDefaultVariantImage {
    __typename: "Image";
    id?: string | null;
    altText?: string | null;
    url: URL;
  }
  export interface ShopProductsByIdsDefaultVariant {
    __typename: "ProductVariant";
    id: string;
    title: string;
    isFavorited: boolean;
    compareAtPrice?: QuickstartTestProductsQueryData.ShopProductsByIdsDefaultVariantCompareAtPrice | null;
    price: QuickstartTestProductsQueryData.ShopProductsByIdsDefaultVariantPrice;
    image?: QuickstartTestProductsQueryData.ShopProductsByIdsDefaultVariantImage | null;
  }
  export interface ShopProductsByIds {
    __typename: "Product";
    id: string;
    title: string;
    tags: string[];
    featuredImage?: QuickstartTestProductsQueryData.ShopProductsByIdsFeaturedImage | null;
    defaultVariant: QuickstartTestProductsQueryData.ShopProductsByIdsDefaultVariant;
  }
  export interface Shop {
    __typename: "Shop";
    id: string;
    name: string;
    productsByIds: (QuickstartTestProductsQueryData.ShopProductsByIds | null)[];
  }
}
export interface QuickstartTestProductsQueryData {
  shop?: QuickstartTestProductsQueryData.Shop | null;
}
declare const document: DocumentNode<QuickstartTestProductsQueryData, QuickstartTestProductsQueryData.Variables, QuickstartTestProductsQueryPartialData>;
export default document;