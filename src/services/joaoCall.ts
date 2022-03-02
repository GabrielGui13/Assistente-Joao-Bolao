import { ClientApplication, Message, Client, MessageAttachment } from 'discord.js'
import { help } from "./help"

export const netoCall = (prefix: string, message: Message, client: ClientApplication | Client<boolean>) => {
    const joao = new MessageAttachment('./src/assets/joao.jpg');
    const breve = [
        "chance",
        "gay"
    ]

    if (message.content.trim() === prefix + ' help') message.channel.send({
        embeds: [help()],
        files: [joao]
    });

    else if (message.content.trim() === prefix + ' teste') message.channel.send('Teste OK!');

    else if (message.content.trim() === prefix + ' bom dia') message.channel.send('Bom dia seu merda');
    else if (message.content.trim() === prefix + ' boa tarde') message.channel.send('Boa tarde seu merda');
    else if (message.content.trim() === prefix + ' boa noite') message.channel.send('Boa noite seu merda');

    else if (breve.includes(message.content.split(' ')[1])) message.channel.send('Funcionalidade em construção! Será habilitada em breve!')

    else message.channel.send('Comando não reconhecido, digite "joao help" para acessar os comandos disponíveis!');
}