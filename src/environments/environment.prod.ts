import { LanguageOptions } from '@igo2/core';
import { SearchSourceOptions, ImportExportServiceOptions } from '@igo2/geo';

interface Environment {
  production: boolean;
  igo: {
    importExport?: ImportExportServiceOptions;
    language?: LanguageOptions;
    searchSources?: { [key: string]: SearchSourceOptions };
  };
}

export const environment: Environment = {
  production: true,
  igo: {
    importExport: {
      url: '/apis/ogre'
    },
    language: {
      prefix: './locale/'
    },
    searchSources: {
      nominatim: {
        available: false
      },
      icherche: {
        searchUrl: '/apis/icherche',
        order: 2,
        params: {
          limit: '8'
        }
      },
      icherchereverse: {
        searchUrl: '/apis/territoires',
        order: 3,
        enabled: true
      },
      ilayer: {
        searchUrl: '/apis/icherche/layers',
        order: 4,
        params: {
          limit: '5'
        }
      }
    }
  }
};
