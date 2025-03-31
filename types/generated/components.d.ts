import type { Schema, Struct } from '@strapi/strapi';

export interface ProductFeatures extends Struct.ComponentSchema {
  collectionName: 'components_product_features';
  info: {
    displayName: 'Features';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductKeySpec extends Struct.ComponentSchema {
  collectionName: 'components_product_key_specs';
  info: {
    displayName: 'Key Spec';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductTechSpec extends Struct.ComponentSchema {
  collectionName: 'components_product_tech_specs';
  info: {
    displayName: 'Tech Spec';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.features': ProductFeatures;
      'product.key-spec': ProductKeySpec;
      'product.tech-spec': ProductTechSpec;
    }
  }
}
