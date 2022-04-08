const ms = require('ms');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = async (client, interaction) => {
    // if (!int.isButton()) return;

    // const queue = player.getQueue(int.guildId);

    // switch (int.customId) {
    //     case 'saveTrack': {
    //         if (!queue || !queue.playing) return int.reply({ content: `No music currently playing... try again ? ❌`, ephemeral: true, components: [] });

    //         int.member.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${int.member.guild.name} ✅`).then(() => {
    //             return int.reply({ content: `I have sent you the title of the music by private messages ✅`, ephemeral: true, components: [] });
    //         }).catch(error => {
    //             return int.reply({ content: `Unable to send you a private message... try again ? ❌`, ephemeral: true, components: [] });
    //         });
    //     }
    // }

    if (!interaction.isCommand()) return;

    const guild = client.guilds.cache.get(interaction.guildId)
    const member = guild.members.cache.get(interaction.member.user.id);
    const voiceChannel = member.voice.channel;

    const { commandName } = interaction;

    switch (commandName) {
        case 'ping': {
            return await interaction.reply(`Ping **${client.ws.ping}ms** 🛰️`)
        }
        case 'xmonstrous': {
            try {
                if (voiceChannel) {
                    joinVoiceChannel({
                        channelId: voiceChannel.id,
                        guildId: interaction.guildId,
                        adapterCreator: guild.voiceAdapterCreator
                    })
                } else {
                    interaction.reply("กรุณาเข้าช่องที่ต้องการใช้งาน")
                }
            } catch (err) {
                return await interaction.reply(`ไม่สามารถเชื่อมต่อกับ ${interaction.member.voice.channel}... โปรดลองอีกครั้ง ? ❌`);
            }
        }
    }
};