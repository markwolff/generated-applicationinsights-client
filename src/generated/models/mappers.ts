/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const TelemetryItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TelemetryItem",
    modelProperties: {
      version: {
        defaultValue: 1,
        serializedName: "ver",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      time: {
        serializedName: "time",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      sampleRate: {
        defaultValue: 100,
        serializedName: "sampleRate",
        type: {
          name: "Number"
        }
      },
      sequence: {
        constraints: {
          MaxLength: 64
        },
        serializedName: "seq",
        type: {
          name: "String"
        }
      },
      instrumentationKey: {
        serializedName: "iKey",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className: "MonitorBase"
        }
      }
    }
  }
};

export const MonitorBase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitorBase",
    modelProperties: {
      baseType: {
        serializedName: "baseType",
        type: {
          name: "String"
        }
      },
      baseData: {
        serializedName: "baseData",
        type: {
          name: "Composite",
          className: "MonitorDomain"
        }
      }
    }
  }
};

export const MonitorDomain: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MonitorDomain",
    modelProperties: {
      test: {
        serializedName: "test",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackResponse",
    modelProperties: {
      itemsReceived: {
        serializedName: "itemsReceived",
        type: {
          name: "Number"
        }
      },
      itemsAccepted: {
        serializedName: "itemsAccepted",
        type: {
          name: "Number"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "TelemetryErrorDetails" }
          }
        }
      }
    }
  }
};

export const TelemetryErrorDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TelemetryErrorDetails",
    modelProperties: {
      index: {
        serializedName: "index",
        type: {
          name: "Number"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricDataPoint: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricDataPoint",
    modelProperties: {
      namespace: {
        constraints: {
          MaxLength: 256
        },
        serializedName: "ns",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      dataPointType: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Number"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      min: {
        serializedName: "min",
        type: {
          name: "Number"
        }
      },
      max: {
        serializedName: "max",
        type: {
          name: "Number"
        }
      },
      stdDev: {
        serializedName: "stdDev",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TelemetryExceptionDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TelemetryExceptionDetails",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      outerId: {
        serializedName: "outerId",
        type: {
          name: "Number"
        }
      },
      typeName: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "typeName",
        type: {
          name: "String"
        }
      },
      message: {
        constraints: {
          MaxLength: 32768
        },
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      hasFullStack: {
        defaultValue: true,
        serializedName: "hasFullStack",
        type: {
          name: "Boolean"
        }
      },
      stack: {
        constraints: {
          MaxLength: 32768
        },
        serializedName: "stack",
        type: {
          name: "String"
        }
      },
      parsedStack: {
        serializedName: "parsedStack",
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "StackFrame" } }
        }
      }
    }
  }
};

export const StackFrame: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StackFrame",
    modelProperties: {
      level: {
        serializedName: "level",
        required: true,
        type: {
          name: "Number"
        }
      },
      method: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "method",
        required: true,
        type: {
          name: "String"
        }
      },
      assembly: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "assembly",
        type: {
          name: "String"
        }
      },
      fileName: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "fileName",
        type: {
          name: "String"
        }
      },
      line: {
        serializedName: "line",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AvailabilityData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "duration",
        required: true,
        type: {
          name: "String"
        }
      },
      success: {
        serializedName: "success",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      runLocation: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "runLocation",
        type: {
          name: "String"
        }
      },
      message: {
        constraints: {
          MaxLength: 8192
        },
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const TelemetryEventData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TelemetryEventData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      name: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const TelemetryExceptionData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TelemetryExceptionData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      exceptions: {
        serializedName: "exceptions",
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "TelemetryExceptionDetails" }
          }
        }
      },
      severityLevel: {
        serializedName: "severityLevel",
        type: {
          name: "String"
        }
      },
      problemId: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "problemId",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const MessageData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      message: {
        constraints: {
          MaxLength: 32768
        },
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      severityLevel: {
        serializedName: "severityLevel",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const MetricsData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricsData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      metrics: {
        serializedName: "metrics",
        required: true,
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "MetricDataPoint" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      }
    }
  }
};

export const PageViewData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageViewData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "duration",
        type: {
          name: "String"
        }
      },
      referredUri: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "referredUri",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const PageViewPerfData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PageViewPerfData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "duration",
        type: {
          name: "String"
        }
      },
      perfTotal: {
        serializedName: "perfTotal",
        type: {
          name: "String"
        }
      },
      networkConnect: {
        serializedName: "networkConnect",
        type: {
          name: "String"
        }
      },
      sentRequest: {
        serializedName: "sentRequest",
        type: {
          name: "String"
        }
      },
      receivedResponse: {
        serializedName: "receivedResponse",
        type: {
          name: "String"
        }
      },
      domProcessing: {
        serializedName: "domProcessing",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const RemoteDependencyData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RemoteDependencyData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      resultCode: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "resultCode",
        type: {
          name: "String"
        }
      },
      data: {
        constraints: {
          MaxLength: 8192
        },
        serializedName: "data",
        type: {
          name: "String"
        }
      },
      type: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      target: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "duration",
        required: true,
        type: {
          name: "String"
        }
      },
      success: {
        defaultValue: true,
        serializedName: "success",
        type: {
          name: "Boolean"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const RequestData: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RequestData",
    modelProperties: {
      ...MonitorDomain.type.modelProperties,
      version: {
        defaultValue: 2,
        serializedName: "ver",
        required: true,
        type: {
          name: "Number"
        }
      },
      id: {
        constraints: {
          MaxLength: 512
        },
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      duration: {
        serializedName: "duration",
        required: true,
        type: {
          name: "String"
        }
      },
      success: {
        defaultValue: true,
        serializedName: "success",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      responseCode: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "responseCode",
        required: true,
        type: {
          name: "String"
        }
      },
      source: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "source",
        type: {
          name: "String"
        }
      },
      url: {
        constraints: {
          MaxLength: 2048
        },
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, constraints: { MaxLength: 8192 } }
        }
      },
      measurements: {
        serializedName: "measurements",
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};
