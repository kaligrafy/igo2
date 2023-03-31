// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { AuthOptions, AuthStorageOptions } from '@igo2/auth';
import { DOMOptions } from '@igo2/common';
import { AnalyticsOptions, LanguageOptions } from '@igo2/core';
import {
  SearchSourceOptions,
  CatalogServiceOptions,
  Projection,
  ImportExportServiceOptions,
  CommonVectorStyleOptions
} from '@igo2/geo';

interface Environment {
  production: boolean;
  igo: {
    app: {
      forceCoordsNA: boolean;
      pwa?: {
        enabled?: boolean;
        promote?: boolean;
      }
    };
    analytics: AnalyticsOptions
    auth?: AuthOptions;
    storage: AuthStorageOptions
    catalog?: CatalogServiceOptions;
    importExport?: ImportExportServiceOptions;
    language?: LanguageOptions;
    searchSources?: { [key: string]: SearchSourceOptions };
    projections?: Projection[];
    interactiveTour?: { activateInteractiveTour: boolean, tourInMobile: boolean; pathToConfigFile: string };
    depot?: { url: string; trainingGuides?: string[]; };
    dom?: DOMOptions[];
    queryOverlayStyle?: {
      base?: CommonVectorStyleOptions,
      selection?: CommonVectorStyleOptions,
      focus?: CommonVectorStyleOptions
    };
    searchOverlayStyle?: {
      base?: CommonVectorStyleOptions,
      selection?: CommonVectorStyleOptions,
      focus?: CommonVectorStyleOptions
    };
  };
}

export const environment: Environment = {
  production: true,
  igo: {
    app: {
      forceCoordsNA: true,
      pwa: {
        enabled: false,
        promote: false
      }
    },
    analytics: {
      provider: "matomo",
      url: "https://geoegl.msp.gouv.qc.ca/Visiteur",
      id: "38"
    },
    auth: {
      // url: '/apis/users',
      tokenKey: 'id_token_igo',
      allowAnonymous: true,
      trustHosts: ['geoegl.msp.gouv.qc.ca']
      ,hostsByKey: [{
        domainRegFilters: '(https:\/\/|http:\/\/)?(.*geoegl.msp.gouv.qc.ca\/apis)(.*)',
        keyProperty: 'key',
        keyValue: 'd8UA0Y9iMIynBa',
     }]
    },
    storage: {
      url: "/user/igo",
      key: 'igo'
    },

    catalog: {
      sources: []
    },
    depot: {
      url: '/apis/depot'
    },
    language: {
      prefix: ['./locale/', './locale/offline/']
    },
    interactiveTour: {
      activateInteractiveTour: false,
      tourInMobile: true,
      pathToConfigFile: './config/interactiveTour.json'
    },
    importExport: {
      importWithStyle: false,
      url: 'https://geoegl.msp.gouv.qc.ca/apis/ogre',
      configFileToGeoDBService: './data/geoDataToIDB.json',
      formats: ['GeoJSON'],
      clientSideFileSizeMaxMb: 75
    },
    searchSources: {
      workspace: {
        available: true,
        enabled: true
      },
      nominatim: {
        available: false
      },
      storedqueries: {
        title: 'Réseau routier Transports Québec',
        searchUrl: 'https://ws.mapserver.transports.gouv.qc.ca/swtq',
        available: true,
        enabled: true,
        storedquery_id: 'rtss',
        srsname: 'epsg:4326',
        fields: [
          { name: 'rtss', defaultValue: '-99' },
          { name: 'chainage', defaultValue: '0', splitPrefix: '\\+' }
        ],
        resultTitle: 'title'
      } as any,
      storedqueriesreverse: {
        order: 1,
        showInPointerSummary: false,
        title: 'Limite territoriale MTQ (par coordonnées)',
        searchUrl: 'https://ws.mapserver.transports.gouv.qc.ca/swtq',
        enabled: true,
        available: true,
        storedquery_id: 'dgt_latlon',
        srsname: 'epsg:4326',
        longField: 'long',
        latField: 'lat',
        resultTitle: 'nom_unite_'
      } as any,
      icherche: {
        searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/icherche',
        order: 2,
        params: {
          limit: '8',
          type:'adresses,codes-postaux,routes,intersections,municipalites,mrc,regadmin,lieux,sorties-autoroute,bornes-km'
        }
      },
      coordinatesreverse: {
        showInPointerSummary: true
      },
      icherchereverse: {
        showInPointerSummary: true,
        searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/terrapi',
        order: 3,
        enabled: true
      },
      ilayer: {
        searchUrl: 'https://geoegl.msp.gouv.qc.ca/apis/icherche/layers',
        available: false,
        order: 4,
        params: {
          limit: '5'
        }
      }
    },
    projections: [
      {
        code: 'EPSG:32198',
        alias: 'Quebec Lambert',
        def:
          '+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 \
          +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
        extent: [-799574, 45802, 891595.4, 1849567.5]
      },
      {
        code: 'EPSG:3798',
        alias: 'MTQ Lambert',
        def:
          '+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 \
          +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
        extent: [31796.5834, 158846.2231, 1813323.4284, 2141241.0978]
      }
    ],
    searchOverlayStyle: {
      base: {
        markerColor: '#5ed0fb', // marker fill
        markerOpacity: 0.8, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#a7e7ff', // marker contour
        fillColor: '#5ed0fb', // poly
        fillOpacity: 0.2, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 0.7, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      focus: {
        markerColor: '#00A1DE', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#DFF7FF', // marker contour
        fillColor: '#00A1DE', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#00A1DE', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      selection: {
        markerColor: '#FFFF33', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#000000', // marker contour
        fillColor: '#FFFF33', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#FFFF33', // line and poly
        strokeOpacity: 0.75, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 4 // line and poly
      }
    },
    queryOverlayStyle: {
      base: {
        markerColor: '#136dbd', // marker fill
        markerOpacity: 0.8, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#a7e7ff', // marker contour
        fillColor: '#136dbd', // poly
        fillOpacity: 0, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#136dbd', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      focus: {
        markerColor: '#00A1DE', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#DFF7FF', // marker contour
        fillColor: '#00A1DE', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#00A1DE', // line and poly
        strokeOpacity: 0.6, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 7 // line and poly
      },
      selection: {
        markerColor: '#02f7e7', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#000000', // marker contour
        fillColor: '#02f7e7', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#02f7e7', // line and poly
        strokeOpacity: 0.8, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 10 // line and poly
      }
    }
  }
};
