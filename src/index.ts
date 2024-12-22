import { observeElement } from '@zero-dependency/dom'

let resultIndex = 0
const fakeResults = [
  42,
  32,
  100,
  69,
]

function getResultNumber() {
  const result = fakeResults[resultIndex]
  resultIndex++
  if (result === undefined) return
  return result
}

observeElement(document.body, (mutation) => {
  if (mutation.addedNodes.length === 2) return

  const el = document.evaluate(
    '/html/body/div/span[5]',
    document,
    null,
    XPathResult.ANY_TYPE,
    null
  )

  const span = el.iterateNext() as HTMLSpanElement
  if (!span) return

  const result = span.querySelector('center > span')
  if (!result) return

  const resultNum = getResultNumber()
  const num = Number(result.textContent)
  if (Number.isNaN(num) || resultNum === undefined) return

  result.innerHTML = `${resultNum}<br>`
})
