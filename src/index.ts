import {EventData, TelemetryEnvelope, Base} from './generated/models';
import {AppInsightsClient} from './generated/appInsightsClient';

const client = new AppInsightsClient();
const event: EventData = {
  name: 'Some event',
  ver: 2,
};
const base: Base = {
  baseData: event,
  baseType: 'EventData',
};
const envelope: TelemetryEnvelope = {
  name: 'Microsoft.ApplicationInsights.abc.Event',
  time: new Date(),
  data: base,
  iKey: 'abc',
};

client.track([envelope]).then(res => {
  res.itemsAccepted;
  res.itemsReceived;
  res._response;
  res.errors;
});
