# POC-Content-Identifier-CID

# Summary

## What is a CID

When we exchange data with peers on the decentralized web, we depend on content addressing (as opposed to the location addressing of the centralized web) to securely locate and identify data. 

A content identifier, or CID, is a self-describing content-addressed identifier. It doesn't indicate where content is stored, but it forms a kind of address based on the content itself.

The CID specification originated in IPFS.

## Why CID
With decentralisation in mind, we depend on having an agreed upon standard of identifying data. Aside from identifying data, being able to validate the contents of said data is required. However not every piece of data or every implementer has the same use case and/or properties resulting in different requirements. Because of that it's important there is enough flexibility. 

IPFS has solved the problem of being able to convey all the requirements of the identification of data creating the concept of a CID. The link below "Anatomy of a CID" describes in great detail how a CID is built.

# Why this POC
This POC demonstrates how we can leverage the concept of a CID by building one and extracting information from one in our projects.

# Run locally
Make sure you have node > 18 and npm installed. Possibly through [nvm](https://github.com/nvm-sh/nvm). 

## Install dependencies
```bash
npm install
```

## Run
```bash
npm run start
```
When making changes to `./src/index.ts` make sure to stop the server, restart and reload the page to view your changes. This POC does not have hot-reloading.

# Resources
- [What is a CID](https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid)
- [Anatomy of a CID](https://proto.school/anatomy-of-a-cid)
- [CID Inspector](https://cid.ipfs.io/#bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi)
- [Multiformats](https://multiformats.io/)
- [Codecs](https://github.com/multiformats/multicodec/blob/master/table.csv)
