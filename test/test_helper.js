import { jsdom } from 'jsdom'
import chai from 'chai'
import dirtyChai from 'dirty-chai'

chai.use(dirtyChai)

const globalify = (doc, win) => {
  global.document = doc
  global.window = win

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key]
    }
  })
}

{
  const doc = jsdom('<!doctype html><html><body></body></html>')
  const win = doc.defaultView
  globalify(doc, win)
}

// Use `usingJsdom` to wrap any tests that need to use their own jsdom.
// It will swap in the supplied jsdom, execute the callback, and then
// restore the test_helper jsdom defined above.
export const usingJsdom = (doc, callback) => {
  const oldWin = global.window
  const oldDoc = global.document

  const win = doc.defaultView
  globalify(doc, win)

  callback()

  globalify(oldDoc, oldWin)
}
