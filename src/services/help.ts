import { MessageEmbed } from 'discord.js';

export const help = () => {
    return new MessageEmbed()
        .setColor("#037bfc")
        .setTitle('Lista de comandos!\n')
        .setDescription("Use o prefixo \"neto\" para usar os comandos:")
        .setAuthor({ name: 'Assistente Netola', iconURL: 'attachment://netola.jpg' })
        .addFields(
            { name: 'teste', value: 'comando para checar se o bot esta funcionando!' },
            { name: 'chance <frase>', value: 'porcentagem para a chance de algo acontecer de acordo com o descrito em <frase>.' },
        )
        .setThumbnail('attachment://netola.jpg')
        .setTimestamp()
        .setFooter({ text: 'Digite "neto help" para abrir a tela de comandos!', iconURL: 'attachment://netola.jpg' })
}
