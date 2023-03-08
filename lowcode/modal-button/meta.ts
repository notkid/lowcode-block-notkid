
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ModalButtonMeta: ComponentMetadata = {
  "componentName": "ModalButton",
  "title": "ModalButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@notkid/lowcode-materials",
    "version": "0.1.0",
    "exportName": "ModalButton",
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
            "en-US": "modalTitle",
            "zh-CN": "modalTitle"
          }
        },
        "name": "modalTitle",
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
        "name": "children",
        propType: 'func',
        "setter": {
          componentName: 'SlotSetter',
          title: '内容插槽',
          initialValue: {
            type: 'JSSlot',
            params: ['options'],
            value: []
          }
        }
      },
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "ModalButton",
    "screenshot": "",
    "schema": {
      "componentName": "ModalButton",
      "props": {}
    }
  }
];

export default {
  ...ModalButtonMeta,
  snippets
};
