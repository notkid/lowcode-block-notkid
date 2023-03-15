
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ImportDialogButtonMeta: ComponentMetadata = {
  "componentName": "ImportDialogButton",
  "title": "ImportDialogButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@notkid/lowcode-materials",
    "version": "0.1.0",
    "exportName": "ImportDialogButton",
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
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "downloadExcelUrl",
            "zh-CN": "downloadExcelUrl"
          }
        },
        "name": "downloadExcelUrl",
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
            "en-US": "uploadExcelUrl",
            "zh-CN": "uploadExcelUrl"
          }
        },
        "name": "uploadExcelUrl",
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
            "en-US": "label",
            "zh-CN": "label"
          }
        },
        "name": "label",
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
            "en-US": "templateType",
            "zh-CN": "templateType"
          }
        },
        "name": "templateType",
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
            "en-US": "valueEnum",
            "zh-CN": "valueEnum"
          }
        },
        "name": "valueEnum",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "items": [
                {
                  "title": {
                    "label": {
                      "type": "i18n",
                      "en-US": "string",
                      "zh-CN": "string"
                    }
                  },
                  "name": "string",
                  "setter": {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    },
                    "isRequired": true,
                    "initialValue": {}
                  }
                }
              ],
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": true
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
    "title": "ImportDialogButton",
    "screenshot": "",
    "schema": {
      "componentName": "ImportDialogButton",
      "props": {}
    }
  }
];

export default {
  ...ImportDialogButtonMeta,
  snippets
};
