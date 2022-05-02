module.exports = {
    app: {
        px: 'XXX',
        token: 'OTcwNjE3ODQzMjE5NTc0Nzg1.Ym-kTw.Xb7wFJ3OeeFQ-BMTZ8fSH6kh9AM',
        playing: 'Bot Maded by ArabuTM ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
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
