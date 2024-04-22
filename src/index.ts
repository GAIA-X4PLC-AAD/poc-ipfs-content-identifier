import { CID } from 'multiformats/cid'
import * as json from 'multiformats/codecs/json'
import { Digest } from 'multiformats/dist/src/hashes/digest'
import { sha256 } from 'multiformats/hashes/sha2'
import { toString as uint8ArrayToString } from 'uint8arrays/to-string'


import { decodeCID } from './utils'

const jsonBytes = json.encode({ hello: 'world' })

;(sha256.digest(jsonBytes) as Promise<Digest<18, number>>).then(hash => {
  const cid = CID.create(1, json.code, hash)

  const data = decodeCID(cid.toString())
  const multihashDigestInHex = uint8ArrayToString(data.multihash.digest, 'base16').toUpperCase()
  const hrCid = `${data.multibase.name} - cidv${data.cid.version} - ${data.multicodec.name} - (${data.multihash.name} : ${data.multihash.size * 8} : ${multihashDigestInHex})`

  ;(document.getElementById('data-bytes') as HTMLElement).innerText = uint8ArrayToString(jsonBytes, 'base16').toUpperCase()
  ;(document.getElementById('data-hash') as HTMLElement).innerText = `${hash.code} - ${hash.size} - ${uint8ArrayToString(hash.digest, 'base16').toUpperCase()}`
  ;(document.getElementById('json-cid') as HTMLElement).innerText = cid.toString()
  ;(document.getElementById('hr-cid') as HTMLElement).innerText = hrCid
  ;(document.querySelector('#multibase dd:first-of-type') as HTMLElement).innerText = data.multibase.prefix
  ;(document.querySelector('#multibase dd:last-of-type') as HTMLElement).innerText = data.multibase.name
  ;(document.querySelector('#multicodec dd:first-of-type') as HTMLElement).innerText = data.multicodec.code.toString()
  ;(document.querySelector('#multicodec dd:last-of-type') as HTMLElement).innerText = data.multicodec.name
  ;(document.querySelector('#multihash dd:first-of-type') as HTMLElement).innerText = data.multihash.code.toString()
  ;(document.querySelector('#multihash dd:last-of-type') as HTMLElement).innerText = data.multihash.name
  ;(document.querySelector('#inspector-link') as any).href = `https://cid.ipfs.io/#${cid.toString()}`
})
