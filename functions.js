const ping = () => ({
  result: null,
});

const getVersion = () => ({
  ok: true,
  result: '1.0',
});

const getUnixTimestamp = () => ({
  ok: true,
  result: Math.floor(
    new Date().getTime() / 1000,
  ),
});

const changeOsTimezone = (timezone) => {
  process.env.TZ = timezone;

  return {
    ok: true,
    result: null,
  };
};

const getOsTimezone = () => ({
  ok: true,
  result: Intl.DateTimeFormat().resolvedOptions().timeZone,
});

module.exports = {
  ping,
  getVersion,
  getUnixTimestamp,
  changeOsTimezone,
  getOsTimezone,
};