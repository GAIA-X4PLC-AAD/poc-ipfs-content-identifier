// @ts-nocheck

import runes from 'runes2'
import { bases } from 'multiformats/basics'
import { CID } from 'multiformats/cid'
import codecs from './codecs.json'


const basesByPrefix = Object.keys(bases).reduce((acc, curr) => {
  acc[bases[curr].prefix] = bases[curr]
  return acc
}, {})

export function decodeCID (value) {
  const prefix = runes.substr(value, 0, 1)
  const base = basesByPrefix[prefix]
  const cid = CID.parse(value, base)

  return {
    cid,
    multibase: cid.version === 0 ? bases.base58btc : base,
    multicodec: codecs[cid.code],
    multihash: {
      ...cid.multihash,
      name: codecs[cid.multihash.code].name
    }
  }
}
