const RESET = "\u001b[0m"

export const log_types: {[type: string]: string} = {
    "info": "\u001b[32m"
}

export function log(type: string, message: string): void {
    const today = new Date()
    const date = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getFullYear()}`
    const time = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}:${today.getSeconds().toString().padStart(2, '0')}`

    console.log(`[${log_types[type]}${type}${RESET}  |  ${date} ${time}]: ${log_types[type]}${message}${RESET}`)
}