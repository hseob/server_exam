import * as database from "./database";

export function getNumber(value: any) {
  const number = Number(value);
  if (value != null && Number.isFinite(number)) {
    return number;
  } else {
    throw new Error("Not a number");
  }
}

export async function getUserVocabularyLevel(userId: number): Promise<number> {
  const count = await database.getWordCountFromDB(userId);
  return count;
}

export async function postUserWord(userId: number, word: string) {
  await database.insertWordFromDB(userId, word);
}
