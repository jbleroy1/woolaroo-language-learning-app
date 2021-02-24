import { GoogleAnalyticsService } from 'services/google/analytics';
import { SafeSearchLikelihood } from 'services/google/image-recognition';
import { APITranslationService } from 'services/api/translation';
import { LocalProfileService } from 'services/local-profile';
import { APIFeedbackService } from 'services/api/feedback';
import { APIImageRecognitionService } from 'services/api/image-recognition';
import { params } from './environment.prod.params';

export const environment = {
  production: true,
  assets: {
    baseUrl: params.assetsBaseUrl,
  },
  i18n: {
    languages: [
      {
        code: 'en',
        name: 'English',
        file: params.assetsBaseUrl + 'assets/locale/en.json',
        direction: 'ltr',
        default: params.language === 'en'
      }/*,
      {
        code: 'fr',
        name: 'Français',
        file: params.assetsBaseUrl + 'assets/locale/fr.json',
        direction: 'ltr',
        default: params.language === 'fr'
      },
      {
        code: 'es',
        name: 'Español',
        file: params.assetsBaseUrl + 'assets/locale/es.json',
        direction: 'ltr',
        default: params.language === 'es'
      },
      {
        code: 'hi',
        name: 'हिन्दी',
        file: params.assetsBaseUrl + 'assets/locale/hi.json',
        direction: 'ltr',
        default: params.language === 'hi'
      },
      {
        code: 'ar',
        name: 'اَلْعَرَبِيَّةُ',
        file: params.assetsBaseUrl + 'assets/locale/ar.json',
        direction: 'rtl',
        default: params.language === 'ar'
      },
      {
        code: 'it',
        name: 'Italiano',
        file: params.assetsBaseUrl + 'assets/locale/it.json',
        direction: 'ltr',
        default: params.language === 'it'
      },
      {
        code: 'pt',
        name: 'Português',
        file: params.assetsBaseUrl + 'assets/locale/pt.json',
        direction: 'ltr',
        default: params.language === 'pt'
      },
      {
        code: 'ru',
        name: 'русский',
        file: params.assetsBaseUrl + 'assets/locale/ru.json',
        direction: 'ltr',
        default: params.language === 'ru'
      },
      {
        code: 'zh',
        name: '普通话',
        file: params.assetsBaseUrl + 'assets/locale/zh.json',
        direction: 'ltr',
        default: params.language === 'zh'
      }*/
    ]
  },
  endangeredLanguage: params.endangeredLanguage,
  pages: {
    splash: {
      logosDuration: 4000,
      videoMaxStartTime: 3000,
      maxLogosDelay: 3000,
      showLogosVideoPosition: 0.5,
      partnerLogoUrl: params.partnerLogoUrl
    },
    translate: {
    },
    captionImage: {
    },
    termsAndPrivacy: {
      enabled: params.termsAndPrivacyEnabled,
      content: params.termsAndPrivacyContent
    },
    capture: {
      instructionsDuration: 5000
    }
  },
  components: {
    snackBar: {
      duration: 3000
    },
    cameraPreview: {
      resizeDelay: 1000
    },
    addWordFieldset: {
      maxRecordingDuration: 5000,
      recordingBufferSize: 4096,
      recordingMimeTypes: [ 'audio/mpeg', 'audio/wav', 'audio/webm' ],
      androidGBoardUrl: 'https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin',
      iosGBoardUrl: 'https://apps.apple.com/us/app/gboard-the-google-keyboard/id1091700242',
      keymanUrl: 'https://keyman.com/',
      progressAnimationInterval: 25
    },
    scrollList: {
      animationInterval: 25,
      snapAcceleration: 0.005,
      snapDeceleration: 0.003,
      snapMaxSpeed: 2,
      snapMinSpeed: 0.01,
      snapDecelerationDistance: 200,
      snapStickyDistance: 30,
      targetPositionRatio: 0.2,
      draggingMinDistance: 5
    },
    translationSelector: {
      scrollList: {
        animationInterval: 25,
        snapAcceleration: 0.01,
        snapMaxSpeed: 2,
        snapMinSpeed: 0.01,
        snapDecelerationDistance: 200,
        snapStickyDistance: 30,
        targetPositionRatio: 0.2,
        draggingMinDistance: 5
      },
      selectionLine: {
        animationInterval: 25,
        rotateSpeed: Math.PI * 2.0 * 0.7
      }
    }
  },
  services: {
    profile: {
      type: LocalProfileService,
      config: null
    },
    imageRecognition: {
      type: APIImageRecognitionService,
      config: {
        endpointURL: `${params.apiUrl}/visionAPI`,
        maxFileSize: 15 * 1024,
        validImageFormats: [ 'image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'image/webp' ],
        resizedImageDimension: 300,
        resizedImageQuality: 0.6,
        maxResults: 10,
        retryCount: 3,
        singleWordDescriptionsOnly: true,
        maxSafeSearchLikelihoods: {
          spoof: SafeSearchLikelihood.VERY_LIKELY,
          medical: SafeSearchLikelihood.POSSIBLE,
          adult: SafeSearchLikelihood.POSSIBLE,
          violence: SafeSearchLikelihood.POSSIBLE,
        }
      }
    },
    imageRendering: {
      config: {
        dropShadowDistance: 1,
        dropShadowColor: 'rgba(0, 0, 0, 0.5)',
        foregroundColor: 'white',
        transliteration: {
          font: '43px Roboto',
          lineHeight: 35,
          lineSpacing: 10,
          marginBottom: 25
        },
        translation: {
          font: '30px Roboto',
          lineHeight: 25,
          lineSpacing: 10,
          marginBottom: 25
        },
        originalWord: {
          font: '30px Roboto',
          lineHeight: 25,
          lineSpacing: 10,
          marginBottom: 85
        },
        line: { width: 1, height: 80, marginBottom: 20 },
        padding: 20
      }
    },
    endangeredLanguage: {
      config: {
        languages: [
          {
            code: 'yug',
            name: 'Yugambeh',
            default: params.endangeredLanguage === 'yum',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-scn.jpg',
            sampleWordTranslation: 'tullei',
            nativeSpeakers: '100000'
          },
          {
            code: 'yi',
            name: 'Yiddish',
            default: params.endangeredLanguage === 'yi',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-yi.jpg',
            sampleWordTranslation: 'דער בױםn',
            nativeSpeakers: '100000'
          },
          {
            code: 'tzm',
            name: 'Tamazight',
            default: params.endangeredLanguage === 'tzm',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-be.jpg',
            sampleWordTranslation: 'aseklu',
            nativeSpeakers: '100000'
          },
          {
            code: 'rap',
            name: 'Rapa Nui',
            default: params.endangeredLanguage === 'rap',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-zyg.jpg',
            sampleWordTranslation: 'tumu',
            nativeSpeakers: '100000'
          },
          {
            code: 'ppl',
            name: 'Nawat',
            default: params.endangeredLanguage === 'ppl',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-zyg.jpg',
            sampleWordTranslation: 'kwawit',
            nativeSpeakers: '100000'
          },
          {
            code: 'mi',
            name: 'Māori',
            default: params.endangeredLanguage === 'mi',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-zyg.jpg',
            sampleWordTranslation: 'rākau',
            nativeSpeakers: '100000'
          },
          {
            code: 'el-cal',
            name: 'Calabrian Greek',
            default: params.endangeredLanguage === 'el-cal',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-zyg.jpg',
            sampleWordTranslation: 'àrburo',
            nativeSpeakers: '100000'
          },
          {
            code: 'scn',
            name: 'Sicilian',
            default: params.endangeredLanguage === 'scn',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-scn.jpg',
            sampleWordTranslation: 'àrbulu',
            nativeSpeakers: '100000'
          },
          {
            code: 'lou',
            name: 'Louisiana Creole',
            default: params.endangeredLanguage === 'lou',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-scn.jpg',
            sampleWordTranslation: 'narb',
            nativeSpeakers: '100000'
          },
          {
            code: 'zyg',
            name: 'Yang Zhuang',
            default: params.endangeredLanguage === 'zyg',
            sampleWordImageURL: params.assetsBaseUrl + 'assets/img/languages/tree-zyg.jpg',
            sampleWordTranslation: 'narb',
            nativeSpeakers: '100000'
          }
        ]
      }
    },
    translation: {
      type: APITranslationService,
      config: {
        endpointURL: `${params.apiUrl}/getTranslations`
      }
    },
    analytics: {
      type: GoogleAnalyticsService,
      config: {
        trackerID: params.googleTrackerId
      }
    },
    feedback: {
      type: APIFeedbackService,
      config: {
        addWordAudioEndpointURL: `${params.apiUrl}/saveAudioSuggestions`,
        addWordEndpointURL: `${params.apiUrl}/addSuggestions`,
        feedbackEndpointURL: `${params.apiUrl}/addFeedback`
      }
    }
  }
};
