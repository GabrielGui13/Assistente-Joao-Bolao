import { ClientApplication, Message, Client, MessageAttachment } from 'discord.js'
import { help } from "./help"

export const netoCall = (prefix: string, message: Message, client: ClientApplication | Client<boolean>) => {
    const netola = new MessageAttachment('./src/assets/netola.jpg');
    const breve = [
        "chance",
    ]

    if (message.content.trim() === prefix + ' help') message.channel.send({
        embeds: [help()],
        files: [netola]
    });

    else if (message.content.trim() === prefix + ' teste') message.channel.send('Teste OK!');

    else if (breve.includes(message.content.split(' ')[1])) message.channel.send('Funcionalidade em construção! Será habilitada em breve!')

    else message.channel.send('Comando não reconhecido, digite "neto help" para acessar os comandos disponíveis!');
}