console.log("BOT STARTING");
console.log("TOKEN LOADED:", !!process.env.TOKEN);

const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
    console.log(`${client.user.tag} is online!`);

    try {
        const channel = await client.channels.fetch('1510483908032987338');

        const memberCount = 0;

        client.user.setPresence({
            activities: [{
                name: `Chiraq Shooting RBX | ${memberCount} players`,
                type: ActivityType.Playing
            }],
            status: 'online'
        });

        const rulesEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Discord Rules')
            .setDescription(`
• No Perm Abusing: Any form of administrative abuse results in punishment.
• Integrity & Honesty: Lying or threats = ban.
• Combat Standards: No RDM, VDM, or trolling.
• Fair Play: No hacking or exploiting.
            `);

        await channel.send({
            content: "@everyone",
            embeds: [rulesEmbed]
        });

    } catch (err) {
        console.log("READY ERROR:", err);
    }
});

client.login(process.env.TOKEN).catch(err => {
    console.log("LOGIN ERROR:", err);
});