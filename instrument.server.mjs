import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: "https://c5fff87a5a46b72fbe7bab87985c5956@o4509280659243008.ingest.de.sentry.io/4509280662257744",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0, // profile every transaction
});
