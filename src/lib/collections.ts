import db from "./db"

export const sessions = db.collection<Session>('sessions')
