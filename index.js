const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
    console.log(`${client.user.tag} is online!`);

    const channel = await client.channels.fetch('1510483908032987338');

    const rulesEmbed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Discord Rules')
        .setDescription(`
•No Perm Abusing: Any form of administrative abuse, including retaliatory or spam kicking, results in immediate permission removal.
• Integrity & Honesty: Lying about server purchases or threatening to harm/nuke the server leads to a permanent ban.
• Combat Standards: No RDM, VDM, or troll killing. Allow players to respawn without interference to maintain gameplay quality.
• Fair Play: Hacking, engine exploits, or misusing commands like /r (revive) is strictly prohibited. Fair play is a core pillar.
• Competitive Respect: Do not interfere with 1v1s, wagers, or ongoing scenes you were not invited to. Cheating in wagers is met with action.
• Anti-Cheat Protocol: If banned, provide a 2-minute clip as evidence. Tickets for bans older than 1-3 days will be closed.
• Donator Rules: Donators are prohibited from using Godmode, Superjump, or distributing weapons to non-donators. All standard rules still apply.
        `);

    channel.send({
        embeds: [rulesEmbed]
    });
});

client.login(process.env.TOKEN)