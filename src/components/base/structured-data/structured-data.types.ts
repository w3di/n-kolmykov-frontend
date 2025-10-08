export interface StructuredDataConfig {
  '@context': string;
  '@type': string;
  'name': string;
  'description': string;
  'url': string;
  'applicationCategory': string;
  'operatingSystem': string;
  'offers': {
    '@type': string;
    'price': string;
    'priceCurrency': string;
  };
  'author': {
    '@type': string;
    'name': string;
    'url': string;
  };
  'publisher': {
    '@type': string;
    'name': string;
  };
  'keywords': string[];
  'inLanguage': string;
  'isAccessibleForFree': boolean;
  'educationalUse': string;
  'learningResourceType': string;
  'educationalLevel': string;
}
