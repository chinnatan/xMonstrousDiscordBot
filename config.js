module.exports = {
    app: {
        px: '!',
        token: 'ODYwMTgxODk4NTU5MjI1OTE2.YN3g0g.Z6IDn0QWO3Oh5yQh1dUBCyOAMJE',
        playing: '❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        defaultVol: 25,
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
