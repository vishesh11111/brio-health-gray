"use client"

import crypto from "crypto"

// You should store these in environment variables
const SECRET_KEY = process.env.ENCRYPTION_KEY || "your-secret-key-min-32-chars-long!!!!"
const ALGORITHM = "aes-256-gcm"

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv)

  let encrypted = cipher.update(text, "utf8", "hex")
  encrypted += cipher.final("hex")

  const authTag = cipher.getAuthTag().toString("hex")

  // Return iv:authTag:encryptedData
  return `${iv.toString("hex")}:${authTag}:${encrypted}`
}

export function decrypt(encryptedText: string): string {
  const [ivHex, authTagHex, encryptedData] = encryptedText.split(":")

  const iv = Buffer.from(ivHex, "hex")
  const authTag = Buffer.from(authTagHex, "hex")
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv)

  decipher.setAuthTag(authTag)

  let decrypted = decipher.update(encryptedData, "hex", "utf8")
  decrypted += decipher.final("utf8")

  return decrypted
}
