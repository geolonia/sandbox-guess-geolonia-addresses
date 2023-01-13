const Normalize = require('@geolonia/normalize-japanese-addresses')
const { distance } = require('fastest-levenshtein')

const form = document.getElementById('form')
const list = document.getElementById('list')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const inputText = e.currentTarget['input'].value
    if (!inputText) return
    const normalized = await Normalize.normalize(inputText)
    if(normalized.level >= 2) {

      list.innerHTML = ''

      const town = normalized.town + normalized.addr
      const townsResp = await fetch(`https://geolonia.github.io/japanese-addresses/api/ja/${normalized.pref}/${normalized.city}.json`)
      const towns = (await townsResp.json()).map(x => {
        const length = Math.max(town.length, x.town.length)
        const score = Math.abs(length - distance(town, x.town)) / length
        return ({
          ...x,
          score: score
        })
      }).filter(town => town.score > 0)
      towns.sort((townA, townB) => townB.score - townA.score)

      if(towns.length > 0) {
        for (const town of towns) {
          const li = document.createElement('li')
          li.innerHTML = `${normalized.pref}${normalized.city}<strong>${town.town}</strong> <small>スコア: ${town.score}<small>`
          list.append(li)
        }
      } else {
        const message = document.createElement('li')
        message.textContent = '候補が見つかりませんでした'
        list.append(message)
      }

    }
})
