import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsFullWidth extends Struct.ComponentSchema {
  collectionName: 'components_about_us_full_widths';
  info: {
    displayName: 'FullWidth';
  };
  attributes: {
    FullWidthImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ImageAlt: Schema.Attribute.String;
  };
}

export interface AboutUsInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_info_cards';
  info: {
    displayName: 'info_card';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsSplitSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_split_sections';
  info: {
    displayName: 'split_section';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImageAlt: Schema.Attribute.String;
    Layout: Schema.Attribute.Enumeration<
      ['text_left_image_right', 'image_left_text_right']
    >;
    Title: Schema.Attribute.String;
  };
}

export interface AboutUsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_stat_items';
  info: {
    displayName: 'stat_item';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    Value: Schema.Attribute.Integer;
    ValueSuffix: Schema.Attribute.String;
  };
}

export interface ContactUsContactLinks extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_links';
  info: {
    displayName: 'ContactLinks';
  };
  attributes: {
    DisplayText: Schema.Attribute.String;
    IconClass: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['phone', 'whatsapp', 'email']>;
    Value: Schema.Attribute.String;
  };
}

export interface ContactUsFormConfig extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_form_configs';
  info: {
    displayName: 'FormConfig';
  };
  attributes: {
    FormField: Schema.Attribute.Component<'contact-us.form-field', true>;
    FormSubmitText: Schema.Attribute.String;
  };
}

export interface ContactUsFormField extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    Grid: Schema.Attribute.Enumeration<['Normal', 'Full']>;
    Key: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    Required: Schema.Attribute.Boolean;
    Type: Schema.Attribute.Enumeration<['text', 'tel', 'email', 'textarea']>;
  };
}

export interface ContactUsLeftIntro extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_left_intros';
  info: {
    displayName: 'LeftIntro';
  };
  attributes: {
    IntroDescription: Schema.Attribute.Blocks;
    IntroTitle: Schema.Attribute.String;
  };
}

export interface ContactUsMap extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    MapEmbedUrl: Schema.Attribute.String;
  };
}

export interface ContactUsStoreDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_store_details';
  info: {
    displayName: 'StoreDetails';
  };
  attributes: {
    ContactLinks: Schema.Attribute.Component<'contact-us.contact-links', true>;
    OpeningText: Schema.Attribute.Blocks;
    OpeningTitle: Schema.Attribute.String;
    StoreAddress: Schema.Attribute.Blocks;
    StoreTitle: Schema.Attribute.String;
  };
}

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
    StickyActionButton: Schema.Attribute.Component<
      'footer.sticky-action-button',
      true
    >;
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

export interface FooterStickyActionButton extends Struct.ComponentSchema {
  collectionName: 'components_footer_sticky_action_buttons';
  info: {
    displayName: 'StickyActionButton';
  };
  attributes: {
    IconClass: Schema.Attribute.String;
    IsVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Link: Schema.Attribute.String;
    Name: Schema.Attribute.String;
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
    Submenu: Schema.Attribute.Component<'header.submenu', true>;
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

export interface HeaderSubmenu extends Struct.ComponentSchema {
  collectionName: 'components_header_submenus';
  info: {
    displayName: 'Submenu';
  };
  attributes: {
    IsDropdown: Schema.Attribute.Boolean;
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

export interface RentalServicesCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_call_to_actions';
  info: {
    displayName: 'CallToAction';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Paragraph: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface RentalServicesCounterSection extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_counter_sections';
  info: {
    displayName: 'CounterSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    Value: Schema.Attribute.Integer;
    ValueSuffix: Schema.Attribute.String;
  };
}

export interface RentalServicesFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_faq_items';
  info: {
    displayName: 'FAQItem';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks;
    IsOpenByDefault: Schema.Attribute.Boolean;
    Question: Schema.Attribute.String;
  };
}

export interface RentalServicesFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_faq_sections';
  info: {
    displayName: 'FAQSection';
  };
  attributes: {
    FAQItem: Schema.Attribute.Component<'rental-services.faq-item', true>;
    MainTitle: Schema.Attribute.String;
  };
}

export interface RentalServicesIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_intro_sections';
  info: {
    displayName: 'IntroSection';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Paragraph: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface RentalServicesWorkGrid extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_work_grids';
  info: {
    displayName: 'WorkGrid';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface RentalServicesWorkSection extends Struct.ComponentSchema {
  collectionName: 'components_rental_services_work_sections';
  info: {
    displayName: 'WorkSection';
  };
  attributes: {
    MainTitle: Schema.Attribute.String;
    WorkGrid: Schema.Attribute.Component<'rental-services.work-grid', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.full-width': AboutUsFullWidth;
      'about-us.info-card': AboutUsInfoCard;
      'about-us.split-section': AboutUsSplitSection;
      'about-us.stat-item': AboutUsStatItem;
      'contact-us.contact-links': ContactUsContactLinks;
      'contact-us.form-config': ContactUsFormConfig;
      'contact-us.form-field': ContactUsFormField;
      'contact-us.left-intro': ContactUsLeftIntro;
      'contact-us.map': ContactUsMap;
      'contact-us.store-details': ContactUsStoreDetails;
      'footer.contact-details': FooterContactDetails;
      'footer.footer': FooterFooter;
      'footer.products-menu': FooterProductsMenu;
      'footer.quick-links-menu': FooterQuickLinksMenu;
      'footer.social-icons': FooterSocialIcons;
      'footer.sticky-action-button': FooterStickyActionButton;
      'header.currency-switcher': HeaderCurrencySwitcher;
      'header.header': HeaderHeader;
      'header.language-switcher': HeaderLanguageSwitcher;
      'header.link-item': HeaderLinkItem;
      'header.main-menu': HeaderMainMenu;
      'header.promo-links': HeaderPromoLinks;
      'header.submenu': HeaderSubmenu;
      'home.brand-logo': HomeBrandLogo;
      'home.feature-item': HomeFeatureItem;
      'home.hero': HomeHero;
      'home.promo-card': HomePromoCard;
      'home.side-banner': HomeSideBanner;
      'product.feature-point': ProductFeaturePoint;
      'product.specification': ProductSpecification;
      'rental-services.call-to-action': RentalServicesCallToAction;
      'rental-services.counter-section': RentalServicesCounterSection;
      'rental-services.faq-item': RentalServicesFaqItem;
      'rental-services.faq-section': RentalServicesFaqSection;
      'rental-services.intro-section': RentalServicesIntroSection;
      'rental-services.work-grid': RentalServicesWorkGrid;
      'rental-services.work-section': RentalServicesWorkSection;
    }
  }
}
