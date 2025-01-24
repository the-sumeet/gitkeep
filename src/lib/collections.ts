import db from "./db"

export const sessions = db.collection<App.Session>('sessions')
