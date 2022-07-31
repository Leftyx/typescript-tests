enum NotificationSystem {
   SendEmail = 'send-email',
}

enum NotificationApplication {
   SendEmail = 'send-email',
   SendSms = 'send-sms',
   SendSlack = 'send-slack',
}

enum NotificationModule {
   WriteTrace = 'write-trace',
}

const NotificationTypes = {
   System: {
      ...NotificationSystem,
   },
   Application: {
      ...NotificationApplication,
   },
   Module: {
      ...NotificationModule,
   },
};

type NotificationTypes = NotificationSystem | NotificationApplication | NotificationModule;

const sendNotification = (type: NotificationTypes, message: string) => {
   console.log(`Sending notification [${type}] : ${message}`);
};

export const runner = (): void => {
   sendNotification(NotificationTypes.System.SendEmail, 'This is the message (System | Send Email)');
   sendNotification(NotificationTypes.Application.SendSms, 'This is the message (Application | Send SMS)');
};
