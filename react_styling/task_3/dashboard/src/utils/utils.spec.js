import {
  getCurrentYear,
  getFooterCopy,
  getLatestNotification,
} from './utils';

describe('Utils functions', () => {
  test('getCurrentYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();

    expect(getCurrentYear()).toBe(currentYear);
  });

  test('getFooterCopy returns correct string when true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string when false', () => {
    expect(getFooterCopy(false)).toBe(
      'Holberton School main dashboard'
    );
  });

  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
