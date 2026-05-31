console.log("BOT STARTING");
console.log("TOKEN LOADED:", !!process.env.TOKEN);
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});
client.once('ready', async () => {
    console.log(`${client.user.tag} is online!`);

    const channel = await client.channels.fetch('1510483908032987338');

    // Get total members in the server
   const memberCount = 0;

    // Set bot status (PLAYING + member count)
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
•No Perm Abusing: Any form of administrative abuse, including retaliatory or spam kicking, results in immediate permission removal.
• Integrity & Honesty: Lying about server purchases or threatening to harm/nuke the server leads to a permanent ban.
• Combat Standards: No RDM, VDM, or troll killing.
• Fair Play: Hacking, engine exploits, or misusing commands is strictly prohibited.
        `);

  channel.send({
    content: "@everyone",
    embeds: [rulesEmbed]
});

client.login(process.env.TOKEN).catch(err => {
    console.log("LOGIN ERROR:", err);
});