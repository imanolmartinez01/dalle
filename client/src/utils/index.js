import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length);
    const randromPrompt = surpriseMePrompts[randomIndex];

    if(randromPrompt === prompt) return getRandomPrompt(prompt)

    return randromPrompt;
}



export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}