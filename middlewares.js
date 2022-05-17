const getVersion  = (req, res, next) => {
    const fn = req.body.fn;
    let jsonResponse = {};

    if (fn === 'getVersion') {
        jsonResponse = {
            ok: true,
            result: '1.0'
        }
    } else if (fn === 'getUnixTimestamp') {
        jsonResponse = {
            ok: true,
            result: Math.floor(new Date().getTime() / 1000)
        }
    } else if (fn === 'changeOsTimezone') {
        const timezone = JSON.parse(req.body.params).timezone;
        process.env.TZ = timezone;
        jsonResponse = {
            ok: true,
            result: null,
        }
    } else if (fn === 'getOsTimezone') {
        jsonResponse = {
            ok: true,
            result: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    }
    res.status(200).json(jsonResponse)
    next()
}

module.exports = getVersion