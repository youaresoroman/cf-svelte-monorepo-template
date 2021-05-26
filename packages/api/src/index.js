import Router from '@tsndr/cloudflare-worker-router'
const router = new Router()

router.get('/', (req, res) => {
  res.body = {result: "OK"}
})

addEventListener('fetch', event => {
  try {
    event.respondWith(router.handle(event))
  } catch (err) {
    console.log(err)
  }
})
