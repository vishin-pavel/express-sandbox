export const config = {
  URL: process.env.URL,
  twilio:{
    accountSid: process.env.TWILIO_ACCOUNT_ID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    operatorWorkspaceSid: process.env.TWILIO_WORKSPACE_SID as string,
    operatorWorkflowSid: process.env.TWILIO_WORKFLOW_SID as string,
    activities: {
      idle: process.env.TWILIO_ACTIVITIES_IDLE,
      offline: process.env.TWILIO_ACTIVITIES_OFFLINE,
    },
    phone: process.env.TWILIO_PHONE as string,
    real: process.env.TWILIO_REAL && process.env.TWILIO_REAL.toLowerCase() === 'true',
    operatorAvailability: {
      timezone: 'America/Los_Angeles',
      from: 6,
      to: 19,
    },
  }
};
