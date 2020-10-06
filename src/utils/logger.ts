const RESET = "\u001b[0m"

export const log_types: {[type: string]: string} = {
    "info": "\u001b[32m"
}

export function log(type: string, message: string): void {
    console.log(`[${log_types[type]}${type.toUpperCase()}${RESET}  | ${(new Date()).toLocaleString()}]: ${log_types[type]}${message}${RESET}`)
}