import * as fs from 'fs'
import * as path from 'path'
import { LANGUAGES_SOURCE } from '@resources/zmb/constants'

interface IMessageIdentifier {
  [key: string]: string
}

interface ILanguage {
  lang: string
  displayName: string
  messages: IMessageIdentifier
}

export interface ILanguageDataResponse {
  data: ILanguage[]
}

export async function getLanguages(
  application: string
): Promise<ILanguageDataResponse> {
  const languagesUrl = path.join(LANGUAGES_SOURCE, `${application}.json`)
  const languages = JSON.parse(fs.readFileSync(languagesUrl).toString())

  return languages
}