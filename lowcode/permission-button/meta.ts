
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const PermissionButtonMeta: ComponentMetadata = {
  "componentName": "PermissionButton",
  "title": "PermissionButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@notkid/lowcode-materials",
    "version": "0.1.0",
    "exportName": "PermissionButton",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "buttonText",
            "zh-CN": "buttonText"
          }
        },
        "name": "buttonText",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "code",
            "zh-CN": "code"
          }
        },
        "name": "code",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "url",
            "zh-CN": "url"
          }
        },
        "name": "url",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": true,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "PermissionButton",
    "screenshot": "",
    "schema": {
      "componentName": "PermissionButton",
      "props": {}
    }
  }
];

export default {
  ...PermissionButtonMeta,
  snippets
};
