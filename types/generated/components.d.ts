import type { Schema, Struct } from '@strapi/strapi';

export interface FooterContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_details';
  info: {
    displayName: 'ContactDetails';
  };
  attributes: {
    IconClass: Schema.Attribute.String;
    IsIcon: Schema.Attribute.Boolean;
    IsLink: Schema.Attribute.Boolean;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    AboutText: Schema.Attribute.Text;
    ContactDetails: Schema.Attribute.Component<'footer.contact-details', true>;
    ContactDetailsTitle: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LogoLink: Schema.Attribute.String;
    ProductsMenu: Schema.Attribute.Component<'footer.products-menu', true>;
    ProductsTitle: Schema.Attribute.String;
    QuickLinksMenu: Schema.Attribute.Component<'footer.quick-links-menu', true>;
    QuickLinkTitle: Schema.Attribute.String;
    SocialIcons: Schema.Attribute.Component<'footer.social-icons', true>;
  };
}

export interface FooterProductsMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_products_menus';
  info: {
    displayName: 'ProductsMenu';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface FooterQuickLinksMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links_menus';
  info: {
    displayName: 'QuickLinksMenu';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface FooterSocialIcons extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_icons';
  info: {
    displayName: 'SocialIcons';
  };
  attributes: {
    IconClass: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

export interface HeaderCurrencySwitcher extends Struct.ComponentSchema {
  collectionName: 'components_header_currency_switchers';
  info: {
    displayName: 'currencySwitcher';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    currencySwitcher: Schema.Attribute.Component<
      'header.currency-switcher',
      true
    >;
    hotlineLabel: Schema.Attribute.String;
    hotlineLabelLink: Schema.Attribute.String;
    hotlineLink: Schema.Attribute.String;
    hotlineNumber: Schema.Attribute.String;
    languageSwitcher: Schema.Attribute.Component<
      'header.language-switcher',
      true
    >;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    LogoLink: Schema.Attribute.String;
    mainMenu: Schema.Attribute.Component<'header.main-menu', true>;
    promoLinks: Schema.Attribute.Component<'header.promo-links', true>;
    searchCategoryLabel: Schema.Attribute.String;
    searchEnabled: Schema.Attribute.Boolean;
    searchPlaceholder: Schema.Attribute.String;
    searchUseCategories: Schema.Attribute.Boolean;
    topBarEnabled: Schema.Attribute.Boolean;
    topBarLinks: Schema.Attribute.Component<'header.link-item', true>;
    topBarText: Schema.Attribute.Text;
  };
}

export interface HeaderLanguageSwitcher extends Struct.ComponentSchema {
  collectionName: 'components_header_language_switchers';
  info: {
    displayName: 'languageSwitcher';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface HeaderLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_header_link_items';
  info: {
    displayName: 'LinkItem';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface HeaderMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_main_menus';
  info: {
    displayName: 'mainMenu';
  };
  attributes: {
    IsDropdown: Schema.Attribute.Boolean;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface HeaderPromoLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_promo_links';
  info: {
    displayName: 'promoLinks';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface HomeBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_home_brand_logos';
  info: {
    displayName: 'BrandLogo';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    IconClass: Schema.Attribute.String;
    Text: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    BodyText: Schema.Attribute.RichText;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    OverlayText: Schema.Attribute.String;
    Title: Schema.Attribute.RichText;
  };
}

export interface HomePromoCard extends Struct.ComponentSchema {
  collectionName: 'components_home_promo_cards';
  info: {
    displayName: 'PromoCard';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ButtonLLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Paragraph: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface HomeSideBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_side_banners';
  info: {
    displayName: 'SideBanner';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Heading1: Schema.Attribute.String;
    Heading2: Schema.Attribute.String;
    Heading3: Schema.Attribute.String;
    Heading4: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
  };
}

export interface ProductFeaturePoint extends Struct.ComponentSchema {
  collectionName: 'components_product_feature_points';
  info: {
    displayName: 'FeaturePoint';
    icon: 'check';
  };
  attributes: {
    Text: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ProductSpecification extends Struct.ComponentSchema {
  collectionName: 'components_product_specifications';
  info: {
    displayName: 'Specification';
    icon: 'check';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.contact-details': FooterContactDetails;
      'footer.footer': FooterFooter;
      'footer.products-menu': FooterProductsMenu;
      'footer.quick-links-menu': FooterQuickLinksMenu;
      'footer.social-icons': FooterSocialIcons;
      'header.currency-switcher': HeaderCurrencySwitcher;
      'header.header': HeaderHeader;
      'header.language-switcher': HeaderLanguageSwitcher;
      'header.link-item': HeaderLinkItem;
      'header.main-menu': HeaderMainMenu;
      'header.promo-links': HeaderPromoLinks;
      'home.brand-logo': HomeBrandLogo;
      'home.feature-item': HomeFeatureItem;
      'home.hero': HomeHero;
      'home.promo-card': HomePromoCard;
      'home.side-banner': HomeSideBanner;
      'product.feature-point': ProductFeaturePoint;
      'product.specification': ProductSpecification;
    }
  }
}
