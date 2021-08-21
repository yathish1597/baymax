import { InMemoryDbService } from 'angular-in-memory-web-api';

// import { accountSettingsFakeData } from '@fake-db/account-settings.data';
// import { BlogFakeData } from '@fake-db/blog.data';
// import { CalendarFakeData } from '@fake-db/calendar.data';
import { CardAnalyticsData } from '@fake_db/card-analytics.data';
// import { CardStatisticsData } from '@fake-db/card-statistics.data';
// import { ChatWidgetFakeData } from '@fake-db/chat-widget.data';
// import { ChatFakeData } from '@fake-db/chat.data';
import { DashboardFakeData } from '@fake_db/dashboard.data';
// import { DatatableFakeData } from '@fake-db/datatables';
// import { EcommerceFakeData } from '@fake-db/ecommerce.data';
// import { EmailFakeData } from '@fake-db/email.data';
// import { FAQFakeData } from '@fake-db/faq.data';
// import { InvoiceFakeData } from '@fake-db/invoice.data';
// import { KBFakeData } from '@fake-db/knowledge-base.data';
// import { NotificationsFakeData } from '@fake-db/notifications.data';
// import { PricingFakeData } from '@fake-db/pricing.data';
// import { ProfileFakeData } from '@fake-db/profile.data';
// import { SearchFakeData } from '@fake-db/search.data';
// import { TodoFakeData } from '@fake-db/todo.data';
// import { UsersFakeData } from '@fake-db/users.data';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Data-table
      

      // Card Analytics
      'card-analytics-data': CardAnalyticsData.data,
 // Dashboard
 'dashboard-data': DashboardFakeData.data
      
    };
  }
}
