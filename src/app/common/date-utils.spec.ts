import { DateUtils } from './date-utils';

describe('DateUtils', () => {
  it('should create an instance', () => {
    expect(new DateUtils()).toBeTruthy();
  });

  it('should be able to convert a date to ISO format string', () => {
    let date = new Date('1991-09-09T00:00:00');
    expect(DateUtils.formatDateInISOFormat(date)).toEqual('1991-09-09');
  });
});
