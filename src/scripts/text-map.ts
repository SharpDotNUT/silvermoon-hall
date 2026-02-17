import ky from 'ky'

export class TextMap {
  textMap = new Map<string, Map<number, string>>()
  static langs = ['zh-Hans']

  constructor(baseUrl: string) {
    TextMap.langs.forEach((lang) => {
      this.textMap.set(lang, new Map<number, string>())
      ky.get<Record<string, string>>(`${baseUrl}/text_${lang}.json`)
        .json()
        .then((data) => {
          Object.entries(data).forEach(([key, value]) => {
            this.textMap.get(lang)?.set(Number(key), value)
          })
        })
    })
  }

  get(lang: string, key: number) {
    return this.textMap.get(lang)?.get(key)
  }
}
