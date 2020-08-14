/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AppInsightsClientContext } from "./appInsightsClientContext";

class AppInsightsClient extends AppInsightsClientContext {
  /**
   * Initializes a new instance of the AppInsightsClient class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AppInsightsClientOptions) {
    super(options);
  }

  /**
   * This operation generates a model using an entire series, each point is detected with the same
   * model. With this method, points before and after a certain point are used to determine whether
   * it is an anomaly. The entire detection can give user an overall status of the time series.
   * @summary Detect anomalies for the entire series in batch.
   * @param body Time series points and period if needed. Advanced model parameters can also be set
   * in the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.TrackResponse2>
   */
  track(body: Models.TelemetryEnvelope[], options?: msRest.RequestOptionsBase): Promise<Models.TrackResponse2>;
  /**
   * @param body Time series points and period if needed. Advanced model parameters can also be set
   * in the request.
   * @param callback The callback
   */
  track(body: Models.TelemetryEnvelope[], callback: msRest.ServiceCallback<Models.TrackResponse>): void;
  /**
   * @param body Time series points and period if needed. Advanced model parameters can also be set
   * in the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  track(body: Models.TelemetryEnvelope[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TrackResponse>): void;
  track(body: Models.TelemetryEnvelope[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TrackResponse>, callback?: msRest.ServiceCallback<Models.TrackResponse>): Promise<Models.TrackResponse2> {
    return this.sendOperationRequest(
      {
        body,
        options
      },
      trackOperationSpec,
      callback) as Promise<Models.TrackResponse2>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const trackOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "track",
  urlParameters: [
    Parameters.endpoint
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "TelemetryEnvelope"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TrackResponse
    },
    206: {
      bodyMapper: Mappers.TrackResponse
    },
    400: {
      bodyMapper: Mappers.TrackResponse
    },
    402: {
      bodyMapper: Mappers.TrackResponse
    },
    429: {
      bodyMapper: Mappers.TrackResponse
    },
    500: {
      bodyMapper: Mappers.TrackResponse
    },
    503: {
      bodyMapper: Mappers.TrackResponse
    },
    default: {
      bodyMapper: Mappers.ExceptionData
    }
  },
  serializer
};

export {
  AppInsightsClient,
  AppInsightsClientContext,
  Models as AppInsightsModels,
  Mappers as AppInsightsMappers
};