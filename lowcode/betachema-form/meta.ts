
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const BetachemaFormMeta: ComponentMetadata = {
  "componentName": "BetachemaForm",
  "title": "BetachemaForm",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@notkid/lowcode-materials",
    "version": "0.1.0",
    "exportName": "BetachemaForm",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "title",
      //       "zh-CN": "@name 抽屉的标"
      //     },
      //     "tip": "title | @name 抽屉的标题"
      //   },
      //   "name": "title",
      //   "description": "@name 抽屉的标题",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "StringSetter",
      //           "isRequired": false,
      //           "initialValue": ""
      //         },
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         },
      //         {
      //           "componentName": "BoolSetter",
      //           "isRequired": false,
      //           "initialValue": false
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           },
      //           "isRequired": false,
      //           "initialValue": {}
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "T",
      //                       "zh-CN": "T"
      //                     }
      //                   },
      //                   "name": "T",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": true,
      //                     "props": {}
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "__@iterator",
      //                       "zh-CN": "__@iterator"
      //                     }
      //                   },
      //                   "name": "__@iterator",
      //                   "setter": {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": true
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter",
      //           "isRequired": false
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "description",
      //       "zh-CN": "description"
      //     }
      //   },
      //   "name": "description",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "props": {
      //       "mode": "node"
      //     },
      //     "isRequired": false,
      //     "initialValue": {
      //       "type": "JSSlot",
      //       "value": []
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "steps",
      //       "zh-CN": "steps"
      //     }
      //   },
      //   "name": "steps",
      //   "setter": {
      //     "componentName": "ArraySetter",
      //     "props": {
      //       "itemSetter": {
      //         "componentName": "ObjectSetter",
      //         "props": {
      //           "config": {
      //             "extraSetter": {
      //               "componentName": "MixedSetter",
      //               "isRequired": false,
      //               "props": {}
      //             }
      //           }
      //         },
      //         "isRequired": false,
      //         "initialValue": {}
      //       }
      //     },
      //     "initialValue": []
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "type",
      //       "zh-CN": "type"
      //     }
      //   },
      //   "name": "type",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "isRequired": false,
      //     "props": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "action",
      //       "zh-CN": "action"
      //     }
      //   },
      //   "name": "action",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "shouldUpdate",
      //       "zh-CN": "shouldUpdate"
      //     }
      //   },
      //   "name": "shouldUpdate",
      //   "defaultValue": "true\nFine-grained control over when to update",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "BoolSetter",
      //           "isRequired": false,
      //           "initialValue": false
      //         },
      //         {
      //           "componentName": "FunctionSetter",
      //           "isRequired": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "form",
      //       "zh-CN": "form"
      //     }
      //   },
      //   "name": "form",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "Values",
      //                       "zh-CN": "Values"
      //                     }
      //                   },
      //                   "name": "Values",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": true,
      //                     "props": {}
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "scrollToField",
      //                       "zh-CN": "scrollToField"
      //                     }
      //                   },
      //                   "name": "scrollToField",
      //                   "setter": {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": true
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "getFieldInstance",
      //                       "zh-CN": "getFieldInstance"
      //                     }
      //                   },
      //                   "name": "getFieldInstance",
      //                   "setter": {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": true
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           },
      //           "isRequired": false,
      //           "initialValue": {}
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "prefixCls",
      //       "zh-CN": "prefixCls"
      //     }
      //   },
      //   "name": "prefixCls",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "size",
      //       "zh-CN": "size"
      //     }
      //   },
      //   "name": "size",
      //   "setter": {
      //     "componentName": "RadioGroupSetter",
      //     "props": {
      //       "dataSource": [
      //         {
      //           "label": "small",
      //           "value": "small"
      //         },
      //         {
      //           "label": "middle",
      //           "value": "middle"
      //         },
      //         {
      //           "label": "large",
      //           "value": "large"
      //         }
      //       ],
      //       "options": [
      //         {
      //           "label": "small",
      //           "value": "small"
      //         },
      //         {
      //           "label": "middle",
      //           "value": "middle"
      //         },
      //         {
      //           "label": "large",
      //           "value": "large"
      //         }
      //       ]
      //     },
      //     "initialValue": "small"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "rootClassName",
      //       "zh-CN": "rootClassName"
      //     }
      //   },
      //   "name": "rootClassName",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onValuesChange",
      //       "zh-CN": "onValuesChange"
      //     }
      //   },
      //   "name": "onValuesChange",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "name",
      //       "zh-CN": "name"
      //     }
      //   },
      //   "name": "name",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "validateTrigger",
      //       "zh-CN": "validateTrigger"
      //     }
      //   },
      //   "name": "validateTrigger",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "StringSetter",
      //           "isRequired": false,
      //           "initialValue": ""
      //         },
      //         {
      //           "componentName": "ArraySetter",
      //           "props": {
      //             "itemSetter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           "initialValue": []
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "preserve",
      //       "zh-CN": "preserve"
      //     }
      //   },
      //   "name": "preserve",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "disabled",
      //       "zh-CN": "disabled"
      //     }
      //   },
      //   "name": "disabled",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "autoComplete",
      //       "zh-CN": "autoComplete"
      //     }
      //   },
      //   "name": "autoComplete",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "colon",
      //       "zh-CN": "colon"
      //     }
      //   },
      //   "name": "colon",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "labelAlign",
      //       "zh-CN": "labelAlign"
      //     }
      //   },
      //   "name": "labelAlign",
      //   "setter": {
      //     "componentName": "RadioGroupSetter",
      //     "props": {
      //       "dataSource": [
      //         {
      //           "label": "left",
      //           "value": "left"
      //         },
      //         {
      //           "label": "right",
      //           "value": "right"
      //         }
      //       ],
      //       "options": [
      //         {
      //           "label": "left",
      //           "value": "left"
      //         },
      //         {
      //           "label": "right",
      //           "value": "right"
      //         }
      //       ]
      //     },
      //     "initialValue": "left"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "labelCol",
      //       "zh-CN": "labelCol"
      //     }
      //   },
      //   "name": "labelCol",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "flex",
      //                 "zh-CN": "flex"
      //               }
      //             },
      //             "name": "flex",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "span",
      //                 "zh-CN": "span"
      //               }
      //             },
      //             "name": "span",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "order",
      //                 "zh-CN": "order"
      //               }
      //             },
      //             "name": "order",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "offset",
      //                 "zh-CN": "offset"
      //               }
      //             },
      //             "name": "offset",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "push",
      //                 "zh-CN": "push"
      //               }
      //             },
      //             "name": "push",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "pull",
      //                 "zh-CN": "pull"
      //               }
      //             },
      //             "name": "pull",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xs",
      //                 "zh-CN": "xs"
      //               }
      //             },
      //             "name": "xs",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "sm",
      //                 "zh-CN": "sm"
      //               }
      //             },
      //             "name": "sm",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "md",
      //                 "zh-CN": "md"
      //               }
      //             },
      //             "name": "md",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "lg",
      //                 "zh-CN": "lg"
      //               }
      //             },
      //             "name": "lg",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xl",
      //                 "zh-CN": "xl"
      //               }
      //             },
      //             "name": "xl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xxl",
      //                 "zh-CN": "xxl"
      //               }
      //             },
      //             "name": "xxl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "requiredMark",
      //       "zh-CN": "requiredMark"
      //     }
      //   },
      //   "name": "requiredMark",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "BoolSetter",
      //           "isRequired": false,
      //           "initialValue": false
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "optional",
      //                 "value": "optional"
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "optional",
      //                 "value": "optional"
      //               }
      //             ]
      //           },
      //           "initialValue": "optional"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "wrapperCol",
      //       "zh-CN": "wrapperCol"
      //     }
      //   },
      //   "name": "wrapperCol",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "flex",
      //                 "zh-CN": "flex"
      //               }
      //             },
      //             "name": "flex",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "span",
      //                 "zh-CN": "span"
      //               }
      //             },
      //             "name": "span",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "order",
      //                 "zh-CN": "order"
      //               }
      //             },
      //             "name": "order",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "offset",
      //                 "zh-CN": "offset"
      //               }
      //             },
      //             "name": "offset",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "push",
      //                 "zh-CN": "push"
      //               }
      //             },
      //             "name": "push",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "pull",
      //                 "zh-CN": "pull"
      //               }
      //             },
      //             "name": "pull",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xs",
      //                 "zh-CN": "xs"
      //               }
      //             },
      //             "name": "xs",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "sm",
      //                 "zh-CN": "sm"
      //               }
      //             },
      //             "name": "sm",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "md",
      //                 "zh-CN": "md"
      //               }
      //             },
      //             "name": "md",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "lg",
      //                 "zh-CN": "lg"
      //               }
      //             },
      //             "name": "lg",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xl",
      //                 "zh-CN": "xl"
      //               }
      //             },
      //             "name": "xl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xxl",
      //                 "zh-CN": "xxl"
      //               }
      //             },
      //             "name": "xxl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "acceptCharset",
      //       "zh-CN": "acceptCharset"
      //     }
      //   },
      //   "name": "acceptCharset",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "encType",
      //       "zh-CN": "encType"
      //     }
      //   },
      //   "name": "encType",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "method",
      //       "zh-CN": "method"
      //     }
      //   },
      //   "name": "method",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "noValidate",
      //       "zh-CN": "noValidate"
      //     }
      //   },
      //   "name": "noValidate",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "target",
      //       "zh-CN": "target"
      //     }
      //   },
      //   "name": "target",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "rel",
      //       "zh-CN": "rel"
      //     }
      //   },
      //   "name": "rel",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "initialValues",
      //       "zh-CN": "initialValues"
      //     }
      //   },
      //   "name": "initialValues",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "component",
      //       "zh-CN": "component"
      //     }
      //   },
      //   "name": "component",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "StringSetter",
      //           "isRequired": false,
      //           "initialValue": ""
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           },
      //           "isRequired": false,
      //           "initialValue": {}
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "fields",
      //       "zh-CN": "fields"
      //     }
      //   },
      //   "name": "fields",
      //   "setter": {
      //     "componentName": "ArraySetter",
      //     "props": {
      //       "itemSetter": {
      //         "componentName": "ObjectSetter",
      //         "props": {
      //           "config": {
      //             "items": [
      //               {
      //                 "title": {
      //                   "label": {
      //                     "type": "i18n",
      //                     "en-US": "name",
      //                     "zh-CN": "name"
      //                   }
      //                 },
      //                 "name": "name",
      //                 "setter": {
      //                   "componentName": "MixedSetter",
      //                   "props": {
      //                     "setters": [
      //                       {
      //                         "componentName": "StringSetter",
      //                         "isRequired": false,
      //                         "initialValue": ""
      //                       },
      //                       {
      //                         "componentName": "NumberSetter",
      //                         "isRequired": false,
      //                         "initialValue": 0
      //                       },
      //                       {
      //                         "componentName": "ArraySetter",
      //                         "props": {
      //                           "itemSetter": {
      //                             "componentName": "MixedSetter",
      //                             "props": {
      //                               "setters": [
      //                                 {
      //                                   "componentName": "StringSetter",
      //                                   "isRequired": false,
      //                                   "initialValue": ""
      //                                 },
      //                                 {
      //                                   "componentName": "NumberSetter",
      //                                   "isRequired": false,
      //                                   "initialValue": 0
      //                                 }
      //                               ]
      //                             }
      //                           }
      //                         },
      //                         "initialValue": []
      //                       }
      //                     ]
      //                   },
      //                   "isRequired": true
      //                 }
      //               }
      //             ],
      //             "extraSetter": {
      //               "componentName": "MixedSetter",
      //               "isRequired": false,
      //               "props": {}
      //             }
      //           }
      //         }
      //       }
      //     },
      //     "initialValue": []
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "validateMessages",
      //       "zh-CN": "validateMessages"
      //     }
      //   },
      //   "name": "validateMessages",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "default",
      //                 "zh-CN": "default"
      //               }
      //             },
      //             "name": "default",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": false
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "required",
      //                 "zh-CN": "required"
      //               }
      //             },
      //             "name": "required",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": false
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "enum",
      //                 "zh-CN": "enum"
      //               }
      //             },
      //             "name": "enum",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": false
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "whitespace",
      //                 "zh-CN": "whitespace"
      //               }
      //             },
      //             "name": "whitespace",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": false
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "date",
      //                 "zh-CN": "date"
      //               }
      //             },
      //             "name": "date",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "format",
      //                           "zh-CN": "format"
      //                         }
      //                       },
      //                       "name": "format",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "parse",
      //                           "zh-CN": "parse"
      //                         }
      //                       },
      //                       "name": "parse",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "invalid",
      //                           "zh-CN": "invalid"
      //                         }
      //                       },
      //                       "name": "invalid",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "types",
      //                 "zh-CN": "types"
      //               }
      //             },
      //             "name": "types",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "string",
      //                           "zh-CN": "string"
      //                         }
      //                       },
      //                       "name": "string",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "method",
      //                           "zh-CN": "method"
      //                         }
      //                       },
      //                       "name": "method",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "array",
      //                           "zh-CN": "array"
      //                         }
      //                       },
      //                       "name": "array",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "object",
      //                           "zh-CN": "object"
      //                         }
      //                       },
      //                       "name": "object",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "number",
      //                           "zh-CN": "number"
      //                         }
      //                       },
      //                       "name": "number",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "date",
      //                           "zh-CN": "date"
      //                         }
      //                       },
      //                       "name": "date",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "boolean",
      //                           "zh-CN": "boolean"
      //                         }
      //                       },
      //                       "name": "boolean",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "integer",
      //                           "zh-CN": "integer"
      //                         }
      //                       },
      //                       "name": "integer",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "float",
      //                           "zh-CN": "float"
      //                         }
      //                       },
      //                       "name": "float",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "regexp",
      //                           "zh-CN": "regexp"
      //                         }
      //                       },
      //                       "name": "regexp",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "email",
      //                           "zh-CN": "email"
      //                         }
      //                       },
      //                       "name": "email",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "url",
      //                           "zh-CN": "url"
      //                         }
      //                       },
      //                       "name": "url",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "hex",
      //                           "zh-CN": "hex"
      //                         }
      //                       },
      //                       "name": "hex",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "string",
      //                 "zh-CN": "string"
      //               }
      //             },
      //             "name": "string",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "len",
      //                           "zh-CN": "len"
      //                         }
      //                       },
      //                       "name": "len",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "min",
      //                           "zh-CN": "min"
      //                         }
      //                       },
      //                       "name": "min",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "max",
      //                           "zh-CN": "max"
      //                         }
      //                       },
      //                       "name": "max",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "range",
      //                           "zh-CN": "range"
      //                         }
      //                       },
      //                       "name": "range",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "number",
      //                 "zh-CN": "number"
      //               }
      //             },
      //             "name": "number",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "len",
      //                           "zh-CN": "len"
      //                         }
      //                       },
      //                       "name": "len",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "min",
      //                           "zh-CN": "min"
      //                         }
      //                       },
      //                       "name": "min",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "max",
      //                           "zh-CN": "max"
      //                         }
      //                       },
      //                       "name": "max",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "range",
      //                           "zh-CN": "range"
      //                         }
      //                       },
      //                       "name": "range",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "array",
      //                 "zh-CN": "array"
      //               }
      //             },
      //             "name": "array",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "len",
      //                           "zh-CN": "len"
      //                         }
      //                       },
      //                       "name": "len",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "min",
      //                           "zh-CN": "min"
      //                         }
      //                       },
      //                       "name": "min",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "max",
      //                           "zh-CN": "max"
      //                         }
      //                       },
      //                       "name": "max",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "range",
      //                           "zh-CN": "range"
      //                         }
      //                       },
      //                       "name": "range",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "pattern",
      //                 "zh-CN": "pattern"
      //               }
      //             },
      //             "name": "pattern",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "mismatch",
      //                           "zh-CN": "mismatch"
      //                         }
      //                       },
      //                       "name": "mismatch",
      //                       "setter": {
      //                         "componentName": "MixedSetter",
      //                         "props": {
      //                           "setters": [
      //                             {
      //                               "componentName": "StringSetter",
      //                               "isRequired": false,
      //                               "initialValue": ""
      //                             },
      //                             {
      //                               "componentName": "FunctionSetter",
      //                               "isRequired": false
      //                             }
      //                           ]
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onFieldsChange",
      //       "zh-CN": "onFieldsChange"
      //     }
      //   },
      //   "name": "onFieldsChange",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onFinishFailed",
      //       "zh-CN": "onFinishFailed"
      //     }
      //   },
      //   "name": "onFinishFailed",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter",
      //           "isRequired": false
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "layout",
      //       "zh-CN": "@name layo"
      //     },
      //     "tip": "layout | @name layout 的布局设置"
      //   },
      //   "name": "layout",
      //   "description": "@name layout 的布局设置",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "labelWrap",
      //       "zh-CN": "labelWrap"
      //     }
      //   },
      //   "name": "labelWrap",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "scrollToFirstError",
      //       "zh-CN": "scrollToFirstError"
      //     }
      //   },
      //   "name": "scrollToFirstError",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "BoolSetter",
      //           "isRequired": false,
      //           "initialValue": false
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "behavior",
      //                       "zh-CN": "behavior"
      //                     }
      //                   },
      //                   "name": "behavior",
      //                   "setter": {
      //                     "componentName": "RadioGroupSetter",
      //                     "props": {
      //                       "dataSource": [
      //                         {
      //                           "label": "auto",
      //                           "value": "auto"
      //                         },
      //                         {
      //                           "label": "smooth",
      //                           "value": "smooth"
      //                         }
      //                       ],
      //                       "options": [
      //                         {
      //                           "label": "auto",
      //                           "value": "auto"
      //                         },
      //                         {
      //                           "label": "smooth",
      //                           "value": "smooth"
      //                         }
      //                       ]
      //                     },
      //                     "initialValue": "auto"
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "T",
      //                       "zh-CN": "T"
      //                     }
      //                   },
      //                   "name": "T",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": true,
      //                     "props": {}
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "behavior",
      //                       "zh-CN": "behavior"
      //                     }
      //                   },
      //                   "name": "behavior",
      //                   "setter": {
      //                     "componentName": "FunctionSetter",
      //                     "isRequired": true
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "hideRequiredMark",
      //       "zh-CN": "@deprecate"
      //     },
      //     "tip": "hideRequiredMark | @deprecated Will warning in future branch. Pls use `requiredMark` instead."
      //   },
      //   "name": "hideRequiredMark",
      //   "description": "@deprecated Will warning in future branch. Pls use `requiredMark` instead.",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "layoutType",
      //       "zh-CN": "layoutType"
      //     }
      //   },
      //   "name": "layoutType",
      //   "setter": {
      //     "componentName": "SelectSetter",
      //     "props": {
      //       "dataSource": [
      //         {
      //           "label": "StepsForm",
      //           "value": "StepsForm"
      //         },
      //         {
      //           "label": "Form",
      //           "value": "Form"
      //         },
      //         {
      //           "label": "DrawerForm",
      //           "value": "DrawerForm"
      //         },
      //         {
      //           "label": "ModalForm",
      //           "value": "ModalForm"
      //         },
      //         {
      //           "label": "QueryFilter",
      //           "value": "QueryFilter"
      //         },
      //         {
      //           "label": "LightFilter",
      //           "value": "LightFilter"
      //         },
      //         {
      //           "label": "StepForm",
      //           "value": "StepForm"
      //         },
      //         {
      //           "label": "Embed",
      //           "value": "Embed"
      //         }
      //       ],
      //       "options": [
      //         {
      //           "label": "StepsForm",
      //           "value": "StepsForm"
      //         },
      //         {
      //           "label": "Form",
      //           "value": "Form"
      //         },
      //         {
      //           "label": "DrawerForm",
      //           "value": "DrawerForm"
      //         },
      //         {
      //           "label": "ModalForm",
      //           "value": "ModalForm"
      //         },
      //         {
      //           "label": "QueryFilter",
      //           "value": "QueryFilter"
      //         },
      //         {
      //           "label": "LightFilter",
      //           "value": "LightFilter"
      //         },
      //         {
      //           "label": "StepForm",
      //           "value": "StepForm"
      //         },
      //         {
      //           "label": "Embed",
      //           "value": "Embed"
      //         }
      //       ]
      //     },
      //     "initialValue": "StepsForm"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "submitter",
      //       "zh-CN": "按钮的统一配置，优先"
      //     },
      //     "tip": "submitter | 按钮的统一配置，优先级低于分步表单的配置"
      //   },
      //   "name": "submitter",
      //   "description": "按钮的统一配置，优先级低于分步表单的配置",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "onSubmit",
      //                       "zh-CN": "onSubmit"
      //                     }
      //                   },
      //                   "name": "onSubmit",
      //                   "setter": {
      //                     "componentName": "FunctionSetter"
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "onReset",
      //                       "zh-CN": "onReset"
      //                     }
      //                   },
      //                   "name": "onReset",
      //                   "setter": {
      //                     "componentName": "FunctionSetter"
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "searchConfig",
      //                       "zh-CN": "searchConfig"
      //                     }
      //                   },
      //                   "name": "searchConfig",
      //                   "setter": {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "resetText",
      //                                 "zh-CN": "resetText"
      //                               }
      //                             },
      //                             "name": "resetText",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "isRequired": false,
      //                               "props": {}
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "submitText",
      //                                 "zh-CN": "submitText"
      //                               }
      //                             },
      //                             "name": "submitText",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "isRequired": false,
      //                               "props": {}
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "submitButtonProps",
      //                       "zh-CN": "submitButtonProps"
      //                     }
      //                   },
      //                   "name": "submitButtonProps",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "props": {
      //                       "setters": [
      //                         {
      //                           "componentName": "FunctionSetter"
      //                         },
      //                         {
      //                           "componentName": "RadioGroupSetter",
      //                           "props": {
      //                             "dataSource": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ],
      //                             "options": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ]
      //                           },
      //                           "initialValue": false
      //                         }
      //                       ]
      //                     }
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "resetButtonProps",
      //                       "zh-CN": "resetButtonProps"
      //                     }
      //                   },
      //                   "name": "resetButtonProps",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "props": {
      //                       "setters": [
      //                         {
      //                           "componentName": "FunctionSetter"
      //                         },
      //                         {
      //                           "componentName": "RadioGroupSetter",
      //                           "props": {
      //                             "dataSource": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ],
      //                             "options": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ]
      //                           },
      //                           "initialValue": false
      //                         }
      //                       ]
      //                     }
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "render",
      //                       "zh-CN": "render"
      //                     }
      //                   },
      //                   "name": "render",
      //                   "setter": {
      //                     "componentName": "MixedSetter",
      //                     "props": {
      //                       "setters": [
      //                         {
      //                           "componentName": "FunctionSetter"
      //                         },
      //                         {
      //                           "componentName": "RadioGroupSetter",
      //                           "props": {
      //                             "dataSource": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ],
      //                             "options": [
      //                               {
      //                                 "label": "false",
      //                                 "value": false
      //                               }
      //                             ]
      //                           },
      //                           "initialValue": false
      //                         }
      //                       ]
      //                     }
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           },
      //           "isRequired": false,
      //           "initialValue": {}
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onFinish",
      //       "zh-CN": "接收任意值，返回 真"
      //     },
      //     "tip": "onFinish | 接收任意值，返回 真值 会关掉这个抽屉"
      //   },
      //   "name": "onFinish",
      //   "description": "接收任意值，返回 真值 会关掉这个抽屉",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter",
      //           "isRequired": false
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "formRef",
      //       "zh-CN": "@name 获取 P"
      //     },
      //     "tip": "formRef | @name 获取 ProFormInstance"
      //   },
      //   "name": "formRef",
      //   "description": "@name 获取 ProFormInstance",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "isRequired": false,
      //     "props": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "syncToUrl",
      //       "zh-CN": "@name 同步结果"
      //     },
      //     "tip": "syncToUrl | @name 同步结果到 url 中"
      //   },
      //   "name": "syncToUrl",
      //   "description": "@name 同步结果到 url 中",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "BoolSetter",
      //           "isRequired": false,
      //           "initialValue": false
      //         },
      //         {
      //           "componentName": "FunctionSetter",
      //           "isRequired": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "syncToUrlAsImportant",
      //       "zh-CN": "@name 当 sy"
      //     },
      //     "tip": "syncToUrlAsImportant | @name 当 syncToUrl 为 true，在页面回显示时，以url上的参数为主，默认为false"
      //   },
      //   "name": "syncToUrlAsImportant",
      //   "description": "@name 当 syncToUrl 为 true，在页面回显示时，以url上的参数为主，默认为false",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "extraUrlParams",
      //       "zh-CN": "@name 额外的 "
      //     },
      //     "tip": "extraUrlParams | @name 额外的 url 参数 中"
      //   },
      //   "name": "extraUrlParams",
      //   "description": "@name 额外的 url 参数 中",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "syncToInitialValues",
      //       "zh-CN": "同步结果到 init"
      //     },
      //     "tip": "syncToInitialValues | 同步结果到 initialValues,默认为true如果为false，reset的时将会忽略从url上获取的数据"
      //   },
      //   "name": "syncToInitialValues",
      //   "description": "同步结果到 initialValues,默认为true如果为false，reset的时将会忽略从url上获取的数据",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "omitNil",
      //       "zh-CN": "如果为 false,"
      //     },
      //     "tip": "omitNil | 如果为 false,会原样保存。"
      //   },
      //   "name": "omitNil",
      //   "description": "如果为 false,会原样保存。",
      //   "defaultValue": "true",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "dateFormatter",
      //       "zh-CN": "格式化 Date 的"
      //     },
      //     "tip": "dateFormatter | 格式化 Date 的方式，默认转化为 string"
      //   },
      //   "name": "dateFormatter",
      //   "description": "格式化 Date 的方式，默认转化为 string",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               },
      //               {
      //                 "label": "string",
      //                 "value": "string"
      //               },
      //               {
      //                 "label": "number",
      //                 "value": "number"
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               },
      //               {
      //                 "label": "string",
      //                 "value": "string"
      //               },
      //               {
      //                 "label": "number",
      //                 "value": "number"
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "params",
      //       "zh-CN": "@name 发起网络"
      //     },
      //     "tip": "params | @name 发起网络请求的参数"
      //   },
      //   "name": "params",
      //   "description": "@name 发起网络请求的参数",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "request",
      //       "zh-CN": "@name 发起网络"
      //     },
      //     "tip": "request | @name 发起网络请求的参数,返回值会覆盖给 initialValues"
      //   },
      //   "name": "request",
      //   "description": "@name 发起网络请求的参数,返回值会覆盖给 initialValues",
      //   "setter": {
      //     "componentName": "FunctionSetter",
      //     "isRequired": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "isKeyPressSubmit",
      //       "zh-CN": "是否回车提交"
      //     },
      //     "tip": "isKeyPressSubmit | 是否回车提交"
      //   },
      //   "name": "isKeyPressSubmit",
      //   "description": "是否回车提交",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "formKey",
      //       "zh-CN": "用于控制form 是"
      //     },
      //     "tip": "formKey | 用于控制form 是否相同的key，高阶用法"
      //   },
      //   "name": "formKey",
      //   "description": "用于控制form 是否相同的key，高阶用法",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "autoFocusFirstInput",
      //       "zh-CN": "@name自动选中第"
      //     },
      //     "tip": "autoFocusFirstInput | @name自动选中第一项"
      //   },
      //   "name": "autoFocusFirstInput",
      //   "description": "@name自动选中第一项",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "readonly",
      //       "zh-CN": "@name 是否只读"
      //     },
      //     "tip": "readonly | @name 是否只读模式，对所有表单项生效"
      //   },
      //   "name": "readonly",
      //   "description": "@name 是否只读模式，对所有表单项生效",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "grid",
      //       "zh-CN": "open grid "
      //     },
      //     "tip": "grid | open grid layout"
      //   },
      //   "name": "grid",
      //   "description": "open grid layout",
      //   "defaultValue": "false",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "colProps",
      //       "zh-CN": "only works"
      //     },
      //     "tip": "colProps | only works when grid is enabled"
      //   },
      //   "name": "colProps",
      //   "description": "only works when grid is enabled",
      //   "defaultValue": "{ xs: 24 }",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "flex",
      //                 "zh-CN": "flex"
      //               }
      //             },
      //             "name": "flex",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "span",
      //                 "zh-CN": "span"
      //               }
      //             },
      //             "name": "span",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "order",
      //                 "zh-CN": "order"
      //               }
      //             },
      //             "name": "order",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "offset",
      //                 "zh-CN": "offset"
      //               }
      //             },
      //             "name": "offset",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "push",
      //                 "zh-CN": "push"
      //               }
      //             },
      //             "name": "push",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "pull",
      //                 "zh-CN": "pull"
      //               }
      //             },
      //             "name": "pull",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xs",
      //                 "zh-CN": "xs"
      //               }
      //             },
      //             "name": "xs",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "sm",
      //                 "zh-CN": "sm"
      //               }
      //             },
      //             "name": "sm",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "md",
      //                 "zh-CN": "md"
      //               }
      //             },
      //             "name": "md",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "lg",
      //                 "zh-CN": "lg"
      //               }
      //             },
      //             "name": "lg",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xl",
      //                 "zh-CN": "xl"
      //               }
      //             },
      //             "name": "xl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "xxl",
      //                 "zh-CN": "xxl"
      //               }
      //             },
      //             "name": "xxl",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "StringSetter",
      //                     "isRequired": false,
      //                     "initialValue": ""
      //                   },
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "items": [
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "flex",
      //                                 "zh-CN": "flex"
      //                               }
      //                             },
      //                             "name": "flex",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "span",
      //                                 "zh-CN": "span"
      //                               }
      //                             },
      //                             "name": "span",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "order",
      //                                 "zh-CN": "order"
      //                               }
      //                             },
      //                             "name": "order",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "offset",
      //                                 "zh-CN": "offset"
      //                               }
      //                             },
      //                             "name": "offset",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "push",
      //                                 "zh-CN": "push"
      //                               }
      //                             },
      //                             "name": "push",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           },
      //                           {
      //                             "title": {
      //                               "label": {
      //                                 "type": "i18n",
      //                                 "en-US": "pull",
      //                                 "zh-CN": "pull"
      //                               }
      //                             },
      //                             "name": "pull",
      //                             "setter": {
      //                               "componentName": "MixedSetter",
      //                               "props": {
      //                                 "setters": [
      //                                   {
      //                                     "componentName": "StringSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": ""
      //                                   },
      //                                   {
      //                                     "componentName": "NumberSetter",
      //                                     "isRequired": false,
      //                                     "initialValue": 0
      //                                   }
      //                                 ]
      //                               }
      //                             }
      //                           }
      //                         ],
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     }
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "rowProps",
      //       "zh-CN": "only works"
      //     },
      //     "tip": "rowProps | only works when grid is enabled"
      //   },
      //   "name": "rowProps",
      //   "description": "only works when grid is enabled",
      //   "defaultValue": "{ gutter: 8 }",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "gutter",
      //                 "zh-CN": "gutter"
      //               }
      //             },
      //             "name": "gutter",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": false,
      //                     "initialValue": 0
      //                   },
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     },
      //                     "isRequired": false,
      //                     "initialValue": {}
      //                   },
      //                   {
      //                     "componentName": "MixedSetter",
      //                     "props": {}
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "align",
      //                 "zh-CN": "align"
      //               }
      //             },
      //             "name": "align",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     },
      //                     "isRequired": false,
      //                     "initialValue": {}
      //                   },
      //                   {
      //                     "componentName": "SelectSetter",
      //                     "props": {
      //                       "dataSource": [
      //                         {
      //                           "label": "top",
      //                           "value": "top"
      //                         },
      //                         {
      //                           "label": "bottom",
      //                           "value": "bottom"
      //                         },
      //                         {
      //                           "label": "middle",
      //                           "value": "middle"
      //                         },
      //                         {
      //                           "label": "stretch",
      //                           "value": "stretch"
      //                         }
      //                       ],
      //                       "options": [
      //                         {
      //                           "label": "top",
      //                           "value": "top"
      //                         },
      //                         {
      //                           "label": "bottom",
      //                           "value": "bottom"
      //                         },
      //                         {
      //                           "label": "middle",
      //                           "value": "middle"
      //                         },
      //                         {
      //                           "label": "stretch",
      //                           "value": "stretch"
      //                         }
      //                       ]
      //                     },
      //                     "initialValue": "top"
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "justify",
      //                 "zh-CN": "justify"
      //               }
      //             },
      //             "name": "justify",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "ObjectSetter",
      //                     "props": {
      //                       "config": {
      //                         "extraSetter": {
      //                           "componentName": "MixedSetter",
      //                           "isRequired": false,
      //                           "props": {}
      //                         }
      //                       }
      //                     },
      //                     "isRequired": false,
      //                     "initialValue": {}
      //                   },
      //                   {
      //                     "componentName": "SelectSetter",
      //                     "props": {
      //                       "dataSource": [
      //                         {
      //                           "label": "center",
      //                           "value": "center"
      //                         },
      //                         {
      //                           "label": "start",
      //                           "value": "start"
      //                         },
      //                         {
      //                           "label": "end",
      //                           "value": "end"
      //                         },
      //                         {
      //                           "label": "space-around",
      //                           "value": "space-around"
      //                         },
      //                         {
      //                           "label": "space-between",
      //                           "value": "space-between"
      //                         },
      //                         {
      //                           "label": "space-evenly",
      //                           "value": "space-evenly"
      //                         }
      //                       ],
      //                       "options": [
      //                         {
      //                           "label": "center",
      //                           "value": "center"
      //                         },
      //                         {
      //                           "label": "start",
      //                           "value": "start"
      //                         },
      //                         {
      //                           "label": "end",
      //                           "value": "end"
      //                         },
      //                         {
      //                           "label": "space-around",
      //                           "value": "space-around"
      //                         },
      //                         {
      //                           "label": "space-between",
      //                           "value": "space-between"
      //                         },
      //                         {
      //                           "label": "space-evenly",
      //                           "value": "space-evenly"
      //                         }
      //                       ]
      //                     },
      //                     "initialValue": "center"
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "wrap",
      //                 "zh-CN": "wrap"
      //               }
      //             },
      //             "name": "wrap",
      //             "setter": {
      //               "componentName": "BoolSetter",
      //               "isRequired": false,
      //               "initialValue": false
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      {
        name: 'layoutType',
        title: {
          label: '表单类型'
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'ProForm',
                value: 'ProForm'
              },
              {
                title: 'ModalForm',
                value: 'ModalForm'
              },
            ]
          }
        }
      },
      {
        name: 'layout',
        title: {
          label: '表单布局'
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '水平',
                value: 'horizontal'
              },
              {
                title: '垂直',
                value: 'vertical'
              },
              {
                title: '行内',
                value: 'inline'
              },
            ]
          }
        }
      },
      {
        name: 'mode',
        title: {
          label: '模式'
        },
        setter: {
          componentName: 'SelectSetter',
          initialValue: {
            type: 'String',
            value: 'add'
          },
          props: {
            options: [
              {
                title: '创建',
                value: 'add'
              },
              {
                title: '编辑',
                value: 'edit'
              },
              {
                title: '详情',
                value: 'view'
              },
            ]
          },
        }
      },
      {
        name: 'detailUrl',
        title: { label: '详情url', tip: 'dataSource | 表格数据' },
        setter: ['StringSetter', 'CustomSetter',]
      },
      {
        name: 'submitUrl',
        title: { label: '提交url', tip: 'dataSource | 表格数据' },
        setter: ['StringSetter', 'CustomSetter',]
      },

      {
        name: 'editUrl',
        title: {
          label: '点击编辑跳转地址',
        },
        propType: 'string',
        setter: 'StringSetter'
      },


      {
        name: 'columns',
        title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: '列标题', tip: 'title | 列标题' },
                      propType: {
                        type: 'oneOfType',
                        value: ['string', 'func']
                      },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: '列标题插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: []
                          }
                        }
                      ],
                      isRequired: true
                    },
                    {
                      name: 'dataIndex',
                      title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                      propType: 'string',
                      setter: ['StringSetter',
                        {
                          "componentName": "ArraySetter",
                          "props": {
                            "itemSetter": {
                              "componentName": "StringSetter",
                              "isRequired": false,
                              "initialValue": {}
                            }
                          }
                        }],
                      isRequired: true
                    },
                    {
                      name: 'valueType',
                      title: { label: '数据类型', tip: 'valueType | 数据类型' },
                      propType: 'string',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '门店远程搜素',
                              value: 'remote'
                            },
                            {
                              title: '操作',
                              value: 'option'
                            },
                            {
                              title: '文本',
                              value: 'text'
                            },
                            {
                              title: '标签',
                              value: 'tag'
                            },
                            {
                              title: '数字',
                              value: 'digit'
                            },
                            {
                              title: '密码输入框',
                              value: 'password'
                            },
                            {
                              title: '金额',
                              value: 'money'
                            },
                            {
                              title: '日期',
                              value: 'date'
                            },
                            {
                              title: '日期时间',
                              value: 'dateTime'
                            },
                            {
                              title: '日期区间',
                              value: 'dateRange'
                            },
                            {
                              title: '日期时间区间',
                              value: 'dateTimeRange'
                            },
                            {
                              title: '链接',
                              value: 'link'
                            },
                            // {
                            //   title: '标签',
                            //   value: 'tag',
                            // },
                            {
                              title: '头像',
                              value: 'avatar'
                            },
                            {
                              title: '开关',
                              value: 'switch'
                            },
                            {
                              title: '百分比',
                              value: 'percent'
                            },
                            {
                              title: '进度条',
                              value: 'progress'
                            },
                            {
                              title: '下拉框',
                              value: 'select'
                            },
                            {
                              title: '单选框',
                              value: 'radio'
                            },
                            {
                              title: '多选框',
                              value: 'checkbox'
                            },
                            {
                              title: '图片',
                              value: 'image'
                            },
                            {
                              title: 'JSON代码框',
                              value: 'jsonCode'
                            },
                            {
                              title: '代码框',
                              value: 'code'
                            },
                            {
                              title: '颜色选择器',
                              value: 'color'
                            },
                            {
                              title: '级联选择器',
                              value: 'cascader'
                            }
                          ]
                        }
                      }
                    },
                    {
                      name: 'url',
                      title: {
                        label: '远程链接',
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
    
                    {
                      name: 'fieldProps',
                      title: {
                        label: '字段属性',
                        tip: 'fieldProps | 字段属性，会透传给表单项'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'formItemProps',
                      title: {
                        label: 'Form.Item 属性',
                        tip: 'formItemProps | 传递给 Form.Item 的配置,可以配置 rules'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'renderTag',
                      title: {
                        label: '使用 Tag 渲染',
                        tip: 'renderTag | 是否使用 Tag 渲染'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'valueEnum',
                      title: {
                        label: '枚举定义',
                        tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'request',
                          'zh-CN': '远程获取枚举'
                        },
                        tip: 'request | 远程获取枚举'
                      },
                      name: 'request',
                      description: '远程获取枚举',
                      setter: {
                        componentName: 'FunctionSetter',
                        isRequired: false
                      }
                    },
                    {
                      name: 'options',
                      title: {
                        label: 'options',
                        tip: '支持select, checkbox, radio, radioButton'
                      },
                      description: '数据源',
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'width',
                      title: { label: '宽度', tip: 'width | 宽度' },
                      propType: {
                        type: 'oneOfType',
                        value: ['number', 'string']
                      },
                      setter: ['NumberSetter', 'StringSetter', 'VariableSetter']
                    },
                    {
                      name: 'tooltip',
                      title: {
                        label: '气泡提示',
                        tip: 'tooltip	| 气泡提示'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'ellipsis',
                      title: {
                        label: '是否自动缩略',
                        tip: 'ellipsis | 是否自动缩略'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'copyable',
                      title: {
                        label: '是否可复制',
                        tip: 'copyable | 是否可复制'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    // {
                    //   name: 'valueEnum',
                    //   title: {
                    //     label: '枚举定义',
                    //     tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                    //   },
                    //   propType: 'object',
                    //   setter: 'JsonSetter'
                    // },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'request',
                    //       'zh-CN': '远程获取枚举'
                    //     },
                    //     tip: 'request | 远程获取枚举'
                    //   },
                    //   name: 'request',
                    //   description: '远程获取枚举',
                    //   setter: {
                    //     componentName: 'FunctionSetter',
                    //     isRequired: false
                    //   }
                    // },
                    {
                      name: 'align',
                      title: { label: '对齐方式', tip: 'align | 对齐方式' },
                      propType: {
                        type: 'oneOf',
                        value: ['left', 'right', 'center']
                      },
                      defaultValue: 'left',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'left',
                                value: 'left'
                              },
                              {
                                title: 'right',
                                value: 'right'
                              },
                              {
                                title: 'center',
                                value: 'center'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'fixed',
                      title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                      description:
                        '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                      defaultValue: '',
                      propType: {
                        type: 'oneOf',
                        value: ['', 'left', 'right']
                      },
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: '不固定',
                                value: ''
                              },
                              {
                                title: '固定在左侧',
                                value: 'left'
                              },
                              {
                                title: '固定在右侧',
                                value: 'right'
                              }
                            ]
                          }
                        },
                        'VariableSetter'
                      ]
                    },
                    {
                      name: 'className',
                      title: {
                        label: '列样式类名',
                        tip: 'className | 列样式类名'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'sorter',
                      title: {
                        label: '排序规则',
                        tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true'
                      },
                      propType: { type: 'oneOfType', value: ['bool', 'func'] },
                      setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter']
                    },
                    {
                      name: 'key',
                      title: {
                        label: 'React key',
                        tip: 'key | React需要的key'
                      },
                      propType: 'string',
                      setter: 'StringSetter'
                    },
                    {
                      name: 'order',
                      title: {
                        label: '排序',
                        tip: 'order | 查询表单中的权重，权重大排序靠前'
                      },
                      propType: 'number',
                      setter: 'NumberSetter'
                    },
                    {
                      name: 'hideInSearch',
                      title: {
                        label: '隐藏搜索列',
                        tip: 'hideInSearch | 在查询表单中不展示此项'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'hideInTable',
                      title: {
                        label: '隐藏列',
                        tip: 'hideInTable | 在 Table 中不展示此列'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'filters',
                      title: {
                        label: '筛选菜单项',
                        tip: 'filters | 表头的筛选菜单项'
                      },
                      propType: 'object',
                      setter: 'JsonSetter'
                    },
                    {
                      name: 'fieldProps.showSearch',
                      title: {
                        label: '下拉框支持搜索',
                        tip: 'fieldProps.showSearch | 下拉框支持搜索'
                      },
                      propType: 'bool',
                      setter: 'BoolSetter'
                    },
                    {
                      name: 'render',
                      title: {
                        label: '自定义渲染',
                        tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引'
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: '单元格插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: []
                          }
                        },
                        'VariableSetter'
                      ]
                    }
                  ]
                }
              },
              initialValue: { title: '标题' }
            }
          }
        }
      },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "intl",
      //       "zh-CN": "intl"
      //     }
      //   },
      //   "name": "intl",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "dataUrl",
      //       "zh-CN": "dataUrl"
      //     }
      //   },
      //   "name": "dataUrl",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "submitTimeout",
      //       "zh-CN": "@name 提交数据"
      //     },
      //     "tip": "submitTimeout | @name 提交数据时，禁用取消按钮的超时时间（毫秒）。"
      //   },
      //   "name": "submitTimeout",
      //   "description": "@name 提交数据时，禁用取消按钮的超时时间（毫秒）。",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "trigger",
      //       "zh-CN": "@name 用于触发"
      //     },
      //     "tip": "trigger | @name 用于触发抽屉打开的 dom ，只能设置一个"
      //   },
      //   "name": "trigger",
      //   "description": "@name 用于触发抽屉打开的 dom ，只能设置一个",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "props": {
      //       "mode": "element"
      //     },
      //     "isRequired": false,
      //     "initialValue": {
      //       "type": "JSSlot",
      //       "value": []
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onVisibleChange",
      //       "zh-CN": "@deprecate"
      //     },
      //     "tip": "onVisibleChange | @deprecated use onOpenChange replace"
      //   },
      //   "name": "onVisibleChange",
      //   "description": "@deprecated use onOpenChange replace",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "visible",
      //       "zh-CN": "@deprecate"
      //     },
      //     "tip": "visible | @deprecated use open replace"
      //   },
      //   "name": "visible",
      //   "description": "@deprecated use open replace",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "open",
      //       "zh-CN": "@name 受控的打"
      //     },
      //     "tip": "open | @name 受控的打开关闭"
      //   },
      //   "name": "open",
      //   "description": "@name 受控的打开关闭",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onOpenChange",
      //       "zh-CN": "@name 打开关闭"
      //     },
      //     "tip": "onOpenChange | @name 打开关闭的事件"
      //   },
      //   "name": "onOpenChange",
      //   "description": "@name 打开关闭的事件",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "FunctionSetter"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "drawerProps",
      //       "zh-CN": "不支持 'visib"
      //     },
      //     "tip": "drawerProps | 不支持 'visible'，请使用全局的 visible"
      //   },
      //   "name": "drawerProps",
      //   "description": "不支持 'visible'，请使用全局的 visible",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "width",
      //       "zh-CN": "@name 抽屉的宽"
      //     },
      //     "tip": "width | @name 抽屉的宽度"
      //   },
      //   "name": "width",
      //   "description": "@name 抽屉的宽度",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "StringSetter",
      //           "isRequired": false,
      //           "initialValue": ""
      //         },
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "modalProps",
      //       "zh-CN": "不支持 'visib"
      //     },
      //     "tip": "modalProps | 不支持 'visible'，请使用全局的 visible"
      //   },
      //   "name": "modalProps",
      //   "description": "不支持 'visible'，请使用全局的 visible",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "collapsed",
      //       "zh-CN": "是否收起"
      //     },
      //     "tip": "collapsed | 是否收起"
      //   },
      //   "name": "collapsed",
      //   "description": "是否收起",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onCollapse",
      //       "zh-CN": "收起按钮的事件"
      //     },
      //     "tip": "onCollapse | 收起按钮的事件"
      //   },
      //   "name": "onCollapse",
      //   "description": "收起按钮的事件",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "collapseRender",
      //       "zh-CN": "收起按钮的 rend"
      //     },
      //     "tip": "collapseRender | 收起按钮的 render"
      //   },
      //   "name": "collapseRender",
      //   "description": "收起按钮的 render",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "hiddenNum",
      //       "zh-CN": "隐藏个数"
      //     },
      //     "tip": "hiddenNum | 隐藏个数"
      //   },
      //   "name": "hiddenNum",
      //   "description": "隐藏个数",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "defaultCollapsed",
      //       "zh-CN": "defaultCollapsed"
      //     }
      //   },
      //   "name": "defaultCollapsed",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "defaultColsNumber",
      //       "zh-CN": "defaultColsNumber"
      //     }
      //   },
      //   "name": "defaultColsNumber",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "labelWidth",
      //       "zh-CN": "@name 文字标签"
      //     },
      //     "tip": "labelWidth | @name 文字标签的宽度"
      //   },
      //   "name": "labelWidth",
      //   "description": "@name 文字标签的宽度",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "auto",
      //                 "value": "auto"
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "auto",
      //                 "value": "auto"
      //               }
      //             ]
      //           },
      //           "initialValue": "auto"
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "split",
      //       "zh-CN": "@name 每一行之"
      //     },
      //     "tip": "split | @name 每一行之前要不要有分割线"
      //   },
      //   "name": "split",
      //   "description": "@name 每一行之前要不要有分割线",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "span",
      //       "zh-CN": "@name 配置列数"
      //     },
      //     "tip": "span | @name 配置列数，一般而言是 8 的倍数"
      //   },
      //   "name": "span",
      //   "description": "@name 配置列数，一般而言是 8 的倍数",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "items": [
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "xs",
      //                       "zh-CN": "xs"
      //                     }
      //                   },
      //                   "name": "xs",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "sm",
      //                       "zh-CN": "sm"
      //                     }
      //                   },
      //                   "name": "sm",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "md",
      //                       "zh-CN": "md"
      //                     }
      //                   },
      //                   "name": "md",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "lg",
      //                       "zh-CN": "lg"
      //                     }
      //                   },
      //                   "name": "lg",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "xl",
      //                       "zh-CN": "xl"
      //                     }
      //                   },
      //                   "name": "xl",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 },
      //                 {
      //                   "title": {
      //                     "label": {
      //                       "type": "i18n",
      //                       "en-US": "xxl",
      //                       "zh-CN": "xxl"
      //                     }
      //                   },
      //                   "name": "xxl",
      //                   "setter": {
      //                     "componentName": "NumberSetter",
      //                     "isRequired": true,
      //                     "initialValue": 0
      //                   }
      //                 }
      //               ],
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "searchText",
      //       "zh-CN": "@name 查询按钮"
      //     },
      //     "tip": "searchText | @name 查询按钮的文本"
      //   },
      //   "name": "searchText",
      //   "description": "@name 查询按钮的文本",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "resetText",
      //       "zh-CN": "@name 重置按钮"
      //     },
      //     "tip": "resetText | @name 重置按钮的文本"
      //   },
      //   "name": "resetText",
      //   "description": "@name 重置按钮的文本",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": false,
      //     "initialValue": ""
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "searchGutter",
      //       "zh-CN": "@name 查询表单"
      //     },
      //     "tip": "searchGutter | @name 查询表单栅格间隔"
      //   },
      //   "name": "searchGutter",
      //   "description": "@name 查询表单栅格间隔",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "NumberSetter",
      //           "isRequired": false,
      //           "initialValue": 0
      //         },
      //         {
      //           "componentName": "ObjectSetter",
      //           "props": {
      //             "config": {
      //               "extraSetter": {
      //                 "componentName": "MixedSetter",
      //                 "isRequired": false,
      //                 "props": {}
      //               }
      //             }
      //           },
      //           "isRequired": false,
      //           "initialValue": {}
      //         },
      //         {
      //           "componentName": "MixedSetter",
      //           "props": {}
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "optionRender",
      //       "zh-CN": "@param sea"
      //     },
      //     "tip": "optionRender | @param searchConfig 基础的配置"
      //   },
      //   "name": "optionRender",
      //   "description": "@param searchConfig 基础的配置",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "ignoreRules",
      //       "zh-CN": "@name 忽略 F"
      //     },
      //     "tip": "ignoreRules | @name 忽略 Form.Item rule规则配置"
      //   },
      //   "name": "ignoreRules",
      //   "description": "@name 忽略 Form.Item rule规则配置",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "showHiddenNum",
      //       "zh-CN": "@name 是否显示"
      //     },
      //     "tip": "showHiddenNum | @name 是否显示 collapse 隐藏个数"
      //   },
      //   "name": "showHiddenNum",
      //   "description": "@name 是否显示 collapse 隐藏个数",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "collapse",
      //       "zh-CN": "collapse"
      //     }
      //   },
      //   "name": "collapse",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "collapseLabel",
      //       "zh-CN": "@name 收起的l"
      //     },
      //     "tip": "collapseLabel | @name 收起的label dom"
      //   },
      //   "name": "collapseLabel",
      //   "description": "@name 收起的label dom",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "isRequired": false,
      //     "props": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "bordered",
      //       "zh-CN": "@name 是否有边"
      //     },
      //     "tip": "bordered | @name 是否有边框"
      //   },
      //   "name": "bordered",
      //   "description": "@name 是否有边框",
      //   "setter": {
      //     "componentName": "BoolSetter",
      //     "isRequired": false,
      //     "initialValue": false
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "footerRender",
      //       "zh-CN": "@name 自定义 "
      //     },
      //     "tip": "footerRender | @name 自定义 footerRender"
      //   },
      //   "name": "footerRender",
      //   "description": "@name 自定义 footerRender",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "props": {
      //       "setters": [
      //         {
      //           "componentName": "FunctionSetter"
      //         },
      //         {
      //           "componentName": "RadioGroupSetter",
      //           "props": {
      //             "dataSource": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ],
      //             "options": [
      //               {
      //                 "label": "false",
      //                 "value": false
      //               }
      //             ]
      //           },
      //           "initialValue": false
      //         }
      //       ]
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "placement",
      //       "zh-CN": "@name 支持配置"
      //     },
      //     "tip": "placement | @name 支持配置弹出的位置"
      //   },
      //   "name": "placement",
      //   "description": "@name 支持配置弹出的位置",
      //   "defaultValue": "bottomLeft",
      //   "setter": {
      //     "componentName": "SelectSetter",
      //     "props": {
      //       "dataSource": [
      //         {
      //           "label": "top",
      //           "value": "top"
      //         },
      //         {
      //           "label": "bottom",
      //           "value": "bottom"
      //         },
      //         {
      //           "label": "bottomLeft",
      //           "value": "bottomLeft"
      //         },
      //         {
      //           "label": "bottomRight",
      //           "value": "bottomRight"
      //         },
      //         {
      //           "label": "topLeft",
      //           "value": "topLeft"
      //         },
      //         {
      //           "label": "topRight",
      //           "value": "topRight"
      //         },
      //         {
      //           "label": "left",
      //           "value": "left"
      //         },
      //         {
      //           "label": "right",
      //           "value": "right"
      //         },
      //         {
      //           "label": "leftTop",
      //           "value": "leftTop"
      //         },
      //         {
      //           "label": "leftBottom",
      //           "value": "leftBottom"
      //         },
      //         {
      //           "label": "rightTop",
      //           "value": "rightTop"
      //         },
      //         {
      //           "label": "rightBottom",
      //           "value": "rightBottom"
      //         }
      //       ],
      //       "options": [
      //         {
      //           "label": "top",
      //           "value": "top"
      //         },
      //         {
      //           "label": "bottom",
      //           "value": "bottom"
      //         },
      //         {
      //           "label": "bottomLeft",
      //           "value": "bottomLeft"
      //         },
      //         {
      //           "label": "bottomRight",
      //           "value": "bottomRight"
      //         },
      //         {
      //           "label": "topLeft",
      //           "value": "topLeft"
      //         },
      //         {
      //           "label": "topRight",
      //           "value": "topRight"
      //         },
      //         {
      //           "label": "left",
      //           "value": "left"
      //         },
      //         {
      //           "label": "right",
      //           "value": "right"
      //         },
      //         {
      //           "label": "leftTop",
      //           "value": "leftTop"
      //         },
      //         {
      //           "label": "leftBottom",
      //           "value": "leftBottom"
      //         },
      //         {
      //           "label": "rightTop",
      //           "value": "rightTop"
      //         },
      //         {
      //           "label": "rightBottom",
      //           "value": "rightBottom"
      //         }
      //       ]
      //     },
      //     "initialValue": "top"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "step",
      //       "zh-CN": "step"
      //     }
      //   },
      //   "name": "step",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "stepProps",
      //       "zh-CN": "stepProps"
      //     }
      //   },
      //   "name": "stepProps",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "className",
      //                 "zh-CN": "className"
      //               }
      //             },
      //             "name": "className",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "style",
      //                 "zh-CN": "style"
      //               }
      //             },
      //             "name": "style",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               },
      //               "isRequired": false,
      //               "initialValue": {}
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "wrapperStyle",
      //                 "zh-CN": "wrapperStyle"
      //               }
      //             },
      //             "name": "wrapperStyle",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               },
      //               "isRequired": false,
      //               "initialValue": {}
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "iconPrefix",
      //                 "zh-CN": "iconPrefix"
      //               }
      //             },
      //             "name": "iconPrefix",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "active",
      //                 "zh-CN": "active"
      //               }
      //             },
      //             "name": "active",
      //             "setter": {
      //               "componentName": "BoolSetter",
      //               "isRequired": false,
      //               "initialValue": false
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "disabled",
      //                 "zh-CN": "disabled"
      //               }
      //             },
      //             "name": "disabled",
      //             "setter": {
      //               "componentName": "BoolSetter",
      //               "isRequired": false,
      //               "initialValue": false
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "stepIndex",
      //                 "zh-CN": "stepIndex"
      //               }
      //             },
      //             "name": "stepIndex",
      //             "setter": {
      //               "componentName": "NumberSetter",
      //               "isRequired": false,
      //               "initialValue": 0
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "stepNumber",
      //                 "zh-CN": "stepNumber"
      //               }
      //             },
      //             "name": "stepNumber",
      //             "setter": {
      //               "componentName": "NumberSetter",
      //               "isRequired": false,
      //               "initialValue": 0
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "status",
      //                 "zh-CN": "status"
      //               }
      //             },
      //             "name": "status",
      //             "setter": {
      //               "componentName": "SelectSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "error",
      //                     "value": "error"
      //                   },
      //                   {
      //                     "label": "process",
      //                     "value": "process"
      //                   },
      //                   {
      //                     "label": "finish",
      //                     "value": "finish"
      //                   },
      //                   {
      //                     "label": "wait",
      //                     "value": "wait"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "error",
      //                     "value": "error"
      //                   },
      //                   {
      //                     "label": "process",
      //                     "value": "process"
      //                   },
      //                   {
      //                     "label": "finish",
      //                     "value": "finish"
      //                   },
      //                   {
      //                     "label": "wait",
      //                     "value": "wait"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "error"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "title",
      //                 "zh-CN": "title"
      //               }
      //             },
      //             "name": "title",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "subTitle",
      //                 "zh-CN": "subTitle"
      //               }
      //             },
      //             "name": "subTitle",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "description",
      //                 "zh-CN": "description"
      //               }
      //             },
      //             "name": "description",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "tailContent",
      //                 "zh-CN": "tailContent"
      //               }
      //             },
      //             "name": "tailContent",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "icon",
      //                 "zh-CN": "icon"
      //               }
      //             },
      //             "name": "icon",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "icons",
      //                 "zh-CN": "icons"
      //               }
      //             },
      //             "name": "icons",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "items": [
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "finish",
      //                           "zh-CN": "finish"
      //                         }
      //                       },
      //                       "name": "finish",
      //                       "setter": {
      //                         "componentName": "SlotSetter",
      //                         "props": {
      //                           "mode": "node"
      //                         },
      //                         "isRequired": true,
      //                         "initialValue": {
      //                           "type": "JSSlot",
      //                           "value": []
      //                         }
      //                       }
      //                     },
      //                     {
      //                       "title": {
      //                         "label": {
      //                           "type": "i18n",
      //                           "en-US": "error",
      //                           "zh-CN": "error"
      //                         }
      //                       },
      //                       "name": "error",
      //                       "setter": {
      //                         "componentName": "SlotSetter",
      //                         "props": {
      //                           "mode": "node"
      //                         },
      //                         "isRequired": true,
      //                         "initialValue": {
      //                           "type": "JSSlot",
      //                           "value": []
      //                         }
      //                       }
      //                     }
      //                   ],
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "onClick",
      //                 "zh-CN": "onClick"
      //               }
      //             },
      //             "name": "onClick",
      //             "setter": {
      //               "componentName": "FunctionSetter"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "onStepClick",
      //                 "zh-CN": "onStepClick"
      //               }
      //             },
      //             "name": "onStepClick",
      //             "setter": {
      //               "componentName": "FunctionSetter"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "progressDot",
      //                 "zh-CN": "progressDot"
      //               }
      //             },
      //             "name": "progressDot",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "BoolSetter",
      //                     "isRequired": false,
      //                     "initialValue": false
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter"
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "stepIcon",
      //                 "zh-CN": "stepIcon"
      //               }
      //             },
      //             "name": "stepIcon",
      //             "setter": {
      //               "componentName": "FunctionSetter"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "render",
      //                 "zh-CN": "render"
      //               }
      //             },
      //             "name": "render",
      //             "setter": {
      //               "componentName": "FunctionSetter"
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "index",
      //       "zh-CN": "index"
      //     }
      //   },
      //   "name": "index",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "current",
      //       "zh-CN": "current"
      //     }
      //   },
      //   "name": "current",
      //   "setter": {
      //     "componentName": "NumberSetter",
      //     "isRequired": false,
      //     "initialValue": 0
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "stepsProps",
      //       "zh-CN": "stepsProps"
      //     }
      //   },
      //   "name": "stepsProps",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "items": [
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "type",
      //                 "zh-CN": "type"
      //               }
      //             },
      //             "name": "type",
      //             "setter": {
      //               "componentName": "RadioGroupSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "inline",
      //                     "value": "inline"
      //                   },
      //                   {
      //                     "label": "default",
      //                     "value": "default"
      //                   },
      //                   {
      //                     "label": "navigation",
      //                     "value": "navigation"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "inline",
      //                     "value": "inline"
      //                   },
      //                   {
      //                     "label": "default",
      //                     "value": "default"
      //                   },
      //                   {
      //                     "label": "navigation",
      //                     "value": "navigation"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "inline"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "className",
      //                 "zh-CN": "className"
      //               }
      //             },
      //             "name": "className",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "rootClassName",
      //                 "zh-CN": "rootClassName"
      //               }
      //             },
      //             "name": "rootClassName",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "current",
      //                 "zh-CN": "current"
      //               }
      //             },
      //             "name": "current",
      //             "setter": {
      //               "componentName": "NumberSetter",
      //               "isRequired": false,
      //               "initialValue": 0
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "direction",
      //                 "zh-CN": "direction"
      //               }
      //             },
      //             "name": "direction",
      //             "setter": {
      //               "componentName": "RadioGroupSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "horizontal",
      //                     "value": "horizontal"
      //                   },
      //                   {
      //                     "label": "vertical",
      //                     "value": "vertical"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "horizontal",
      //                     "value": "horizontal"
      //                   },
      //                   {
      //                     "label": "vertical",
      //                     "value": "vertical"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "horizontal"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "iconPrefix",
      //                 "zh-CN": "iconPrefix"
      //               }
      //             },
      //             "name": "iconPrefix",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "initial",
      //                 "zh-CN": "initial"
      //               }
      //             },
      //             "name": "initial",
      //             "setter": {
      //               "componentName": "NumberSetter",
      //               "isRequired": false,
      //               "initialValue": 0
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "labelPlacement",
      //                 "zh-CN": "labelPlacement"
      //               }
      //             },
      //             "name": "labelPlacement",
      //             "setter": {
      //               "componentName": "RadioGroupSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "horizontal",
      //                     "value": "horizontal"
      //                   },
      //                   {
      //                     "label": "vertical",
      //                     "value": "vertical"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "horizontal",
      //                     "value": "horizontal"
      //                   },
      //                   {
      //                     "label": "vertical",
      //                     "value": "vertical"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "horizontal"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "prefixCls",
      //                 "zh-CN": "prefixCls"
      //               }
      //             },
      //             "name": "prefixCls",
      //             "setter": {
      //               "componentName": "StringSetter",
      //               "isRequired": false,
      //               "initialValue": ""
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "progressDot",
      //                 "zh-CN": "progressDot"
      //               }
      //             },
      //             "name": "progressDot",
      //             "setter": {
      //               "componentName": "MixedSetter",
      //               "props": {
      //                 "setters": [
      //                   {
      //                     "componentName": "BoolSetter",
      //                     "isRequired": false,
      //                     "initialValue": false
      //                   },
      //                   {
      //                     "componentName": "FunctionSetter"
      //                   }
      //                 ]
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "responsive",
      //                 "zh-CN": "responsive"
      //               }
      //             },
      //             "name": "responsive",
      //             "setter": {
      //               "componentName": "BoolSetter",
      //               "isRequired": false,
      //               "initialValue": false
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "size",
      //                 "zh-CN": "size"
      //               }
      //             },
      //             "name": "size",
      //             "setter": {
      //               "componentName": "RadioGroupSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "small",
      //                     "value": "small"
      //                   },
      //                   {
      //                     "label": "default",
      //                     "value": "default"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "small",
      //                     "value": "small"
      //                   },
      //                   {
      //                     "label": "default",
      //                     "value": "default"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "small"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "status",
      //                 "zh-CN": "status"
      //               }
      //             },
      //             "name": "status",
      //             "setter": {
      //               "componentName": "SelectSetter",
      //               "props": {
      //                 "dataSource": [
      //                   {
      //                     "label": "error",
      //                     "value": "error"
      //                   },
      //                   {
      //                     "label": "process",
      //                     "value": "process"
      //                   },
      //                   {
      //                     "label": "finish",
      //                     "value": "finish"
      //                   },
      //                   {
      //                     "label": "wait",
      //                     "value": "wait"
      //                   }
      //                 ],
      //                 "options": [
      //                   {
      //                     "label": "error",
      //                     "value": "error"
      //                   },
      //                   {
      //                     "label": "process",
      //                     "value": "process"
      //                   },
      //                   {
      //                     "label": "finish",
      //                     "value": "finish"
      //                   },
      //                   {
      //                     "label": "wait",
      //                     "value": "wait"
      //                   }
      //                 ]
      //               },
      //               "initialValue": "error"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "style",
      //                 "zh-CN": "style"
      //               }
      //             },
      //             "name": "style",
      //             "setter": {
      //               "componentName": "ObjectSetter",
      //               "props": {
      //                 "config": {
      //                   "extraSetter": {
      //                     "componentName": "MixedSetter",
      //                     "isRequired": false,
      //                     "props": {}
      //                   }
      //                 }
      //               },
      //               "isRequired": false,
      //               "initialValue": {}
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "percent",
      //                 "zh-CN": "percent"
      //               }
      //             },
      //             "name": "percent",
      //             "setter": {
      //               "componentName": "NumberSetter",
      //               "isRequired": false,
      //               "initialValue": 0
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "onChange",
      //                 "zh-CN": "onChange"
      //               }
      //             },
      //             "name": "onChange",
      //             "setter": {
      //               "componentName": "FunctionSetter"
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "children",
      //                 "zh-CN": "children"
      //               }
      //             },
      //             "name": "children",
      //             "setter": {
      //               "componentName": "SlotSetter",
      //               "props": {
      //                 "mode": "node"
      //               },
      //               "isRequired": false,
      //               "initialValue": {
      //                 "type": "JSSlot",
      //                 "value": []
      //               }
      //             }
      //           },
      //           {
      //             "title": {
      //               "label": {
      //                 "type": "i18n",
      //                 "en-US": "items",
      //                 "zh-CN": "items"
      //               }
      //             },
      //             "name": "items",
      //             "setter": {
      //               "componentName": "ArraySetter",
      //               "props": {
      //                 "itemSetter": {
      //                   "componentName": "ObjectSetter",
      //                   "props": {
      //                     "config": {
      //                       "items": [
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "className",
      //                               "zh-CN": "className"
      //                             }
      //                           },
      //                           "name": "className",
      //                           "setter": {
      //                             "componentName": "StringSetter",
      //                             "isRequired": false,
      //                             "initialValue": ""
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "description",
      //                               "zh-CN": "description"
      //                             }
      //                           },
      //                           "name": "description",
      //                           "setter": {
      //                             "componentName": "SlotSetter",
      //                             "props": {
      //                               "mode": "node"
      //                             },
      //                             "isRequired": false,
      //                             "initialValue": {
      //                               "type": "JSSlot",
      //                               "value": []
      //                             }
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "icon",
      //                               "zh-CN": "icon"
      //                             }
      //                           },
      //                           "name": "icon",
      //                           "setter": {
      //                             "componentName": "SlotSetter",
      //                             "props": {
      //                               "mode": "node"
      //                             },
      //                             "isRequired": false,
      //                             "initialValue": {
      //                               "type": "JSSlot",
      //                               "value": []
      //                             }
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "onClick",
      //                               "zh-CN": "onClick"
      //                             }
      //                           },
      //                           "name": "onClick",
      //                           "setter": {
      //                             "componentName": "FunctionSetter"
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "status",
      //                               "zh-CN": "status"
      //                             }
      //                           },
      //                           "name": "status",
      //                           "setter": {
      //                             "componentName": "SelectSetter",
      //                             "props": {
      //                               "dataSource": [
      //                                 {
      //                                   "label": "error",
      //                                   "value": "error"
      //                                 },
      //                                 {
      //                                   "label": "process",
      //                                   "value": "process"
      //                                 },
      //                                 {
      //                                   "label": "finish",
      //                                   "value": "finish"
      //                                 },
      //                                 {
      //                                   "label": "wait",
      //                                   "value": "wait"
      //                                 }
      //                               ],
      //                               "options": [
      //                                 {
      //                                   "label": "error",
      //                                   "value": "error"
      //                                 },
      //                                 {
      //                                   "label": "process",
      //                                   "value": "process"
      //                                 },
      //                                 {
      //                                   "label": "finish",
      //                                   "value": "finish"
      //                                 },
      //                                 {
      //                                   "label": "wait",
      //                                   "value": "wait"
      //                                 }
      //                               ]
      //                             },
      //                             "initialValue": "error"
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "disabled",
      //                               "zh-CN": "disabled"
      //                             }
      //                           },
      //                           "name": "disabled",
      //                           "setter": {
      //                             "componentName": "BoolSetter",
      //                             "isRequired": false,
      //                             "initialValue": false
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "title",
      //                               "zh-CN": "title"
      //                             }
      //                           },
      //                           "name": "title",
      //                           "setter": {
      //                             "componentName": "SlotSetter",
      //                             "props": {
      //                               "mode": "node"
      //                             },
      //                             "isRequired": false,
      //                             "initialValue": {
      //                               "type": "JSSlot",
      //                               "value": []
      //                             }
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "subTitle",
      //                               "zh-CN": "subTitle"
      //                             }
      //                           },
      //                           "name": "subTitle",
      //                           "setter": {
      //                             "componentName": "SlotSetter",
      //                             "props": {
      //                               "mode": "node"
      //                             },
      //                             "isRequired": false,
      //                             "initialValue": {
      //                               "type": "JSSlot",
      //                               "value": []
      //                             }
      //                           }
      //                         },
      //                         {
      //                           "title": {
      //                             "label": {
      //                               "type": "i18n",
      //                               "en-US": "style",
      //                               "zh-CN": "style"
      //                             }
      //                           },
      //                           "name": "style",
      //                           "setter": {
      //                             "componentName": "ObjectSetter",
      //                             "props": {
      //                               "config": {
      //                                 "extraSetter": {
      //                                   "componentName": "MixedSetter",
      //                                   "isRequired": false,
      //                                   "props": {}
      //                                 }
      //                               }
      //                             },
      //                             "isRequired": false,
      //                             "initialValue": {}
      //                           }
      //                         }
      //                       ],
      //                       "extraSetter": {
      //                         "componentName": "MixedSetter",
      //                         "isRequired": false,
      //                         "props": {}
      //                       }
      //                     }
      //                   }
      //                 }
      //               },
      //               "initialValue": []
      //             }
      //           }
      //         ],
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "formProps",
      //       "zh-CN": "formProps"
      //     }
      //   },
      //   "name": "formProps",
      //   "setter": {
      //     "componentName": "ObjectSetter",
      //     "props": {
      //       "config": {
      //         "extraSetter": {
      //           "componentName": "MixedSetter",
      //           "isRequired": false,
      //           "props": {}
      //         }
      //       }
      //     },
      //     "isRequired": false,
      //     "initialValue": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onCurrentChange",
      //       "zh-CN": "onCurrentChange"
      //     }
      //   },
      //   "name": "onCurrentChange",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "stepsRender",
      //       "zh-CN": "自定义步骤器"
      //     },
      //     "tip": "stepsRender | 自定义步骤器"
      //   },
      //   "name": "stepsRender",
      //   "description": "自定义步骤器",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "formMapRef",
      //       "zh-CN": "@name 所有表单"
      //     },
      //     "tip": "formMapRef | @name 所有表单的 formMapRef"
      //   },
      //   "name": "formMapRef",
      //   "description": "@name 所有表单的 formMapRef",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "isRequired": false,
      //     "props": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "stepFormRender",
      //       "zh-CN": "自定义单个表单"
      //     },
      //     "tip": "stepFormRender | 自定义单个表单"
      //   },
      //   "name": "stepFormRender",
      //   "description": "自定义单个表单",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "stepsFormRender",
      //       "zh-CN": "自定义整个表单区域"
      //     },
      //     "tip": "stepsFormRender | 自定义整个表单区域"
      //   },
      //   "name": "stepsFormRender",
      //   "description": "自定义整个表单区域",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "containerStyle",
      //       "zh-CN": "containerStyle"
      //     }
      //   },
      //   "name": "containerStyle",
      //   "setter": {
      //     "componentName": "MixedSetter",
      //     "isRequired": false,
      //     "props": {}
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onFormChange",
      //       "zh-CN": "onFormChange"
      //     }
      //   },
      //   "name": "onFormChange",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // },
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "onFormFinish",
      //       "zh-CN": "onFormFinish"
      //     }
      //   },
      //   "name": "onFormFinish",
      //   "setter": {
      //     "componentName": "FunctionSetter"
      //   }
      // }
    ],
    "supports": {
      "style": true,
      "className": true,
      "events": [
        {
          "name": "onInit",
          "description": "@name 表单初始化成功，比如布局，label等计算完成"
        },
        {
          "name": "onReset"
        }
      ]
    },
    "component": {}
  }
};

const valueEnum = {
  money: { text: '按金额' },
  discount: { text: '按折扣' },
};


const snippets: Snippet[] = [
  {
    "title": "BetachemaForm",
    "screenshot": "",
    "schema": {
      "componentName": "BetachemaForm",
      "props": {
        "shouldUpdate": "true\nFine-grained control over when to update",
        "omitNil": "true",
        "grid": "false",
        "colProps": "{ xs: 24 }",
        "rowProps": "{ gutter: 8 }",
        "placement": "bottomLeft",
        "columns": [
          {
            title: '优惠方式',
            dataIndex: 'type',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            valueType: 'select',
            valueEnum,
            width: 'm',
          },
          // {
          //   valueType: 'dependency',
          //   name: ['type'],
          //   columns: ({ type }) => {
          //     if (type === 'money') {
          //       return [
          //         {
          //           dataIndex: 'money',
          //           title: '优惠金额',
          //           width: 'm',
          //           valueType: 'money',
          //         },
          //       ];
          //     }

          //     if (type === 'discount') {
          //       return [
          //         {
          //           dataIndex: 'discount',
          //           title: '折扣',
          //           valueType: 'digit',
          //           width: 'm',
          //           fieldProps: {
          //             precision: 2,
          //           },
          //         },
          //       ];
          //     }

          //     return [];
          //   },
          // },
        ],
      }
    }
  }
];

export default {
  ...BetachemaFormMeta,
  snippets
};
