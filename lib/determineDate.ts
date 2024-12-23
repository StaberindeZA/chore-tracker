type DateRanges = 'thisWeek' | 'thisMonth' | 'lastWeek' | 'lastMonth';

export function determineDate(dateRange: DateRanges): { startDate: Date; endDate: Date } {
  const now = new Date();
  const today = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  ));

  switch (dateRange) {
    case 'lastWeek': {
      const currentDay = today.getUTCDay();
      const startDate = new Date(today);
      startDate.setUTCDate(today.getUTCDate() - currentDay - 7);
      
      const endDate = new Date(startDate);
      endDate.setUTCDate(startDate.getUTCDate() + 6);
      endDate.setUTCHours(23, 59, 59, 999);
      
      return { startDate, endDate };
    }

    case 'thisMonth': {
      const startDate = new Date(Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        1
      ));
      
      const endDate = new Date(Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth() + 1,
        0,
        23, 59, 59, 999
      ));
      
      return { startDate, endDate };
    }

    case 'lastMonth': {
      const startDate = new Date(Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth() - 1,
        1
      ));
      
      const endDate = new Date(Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        0,
        23, 59, 59, 999
      ));
      
      return { startDate, endDate };
    }

    case 'thisWeek': 
    default: {
      const currentDay = today.getUTCDay();
      const startDate = new Date(today);
      startDate.setUTCDate(today.getUTCDate() - currentDay);
      
      const endDate = new Date(startDate);
      endDate.setUTCDate(startDate.getUTCDate() + 6);
      endDate.setUTCHours(23, 59, 59, 999);
      
      return { startDate, endDate };
    }
  }
}
