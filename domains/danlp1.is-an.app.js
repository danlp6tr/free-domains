// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'trying out stuff and need cheap domains (obviously without having bad intentions)', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'danlp1', // desired subdomain name
  owner: {
    repo: '<https://URL/to/the/repository/with/your/project/sources/if/it/is/public>',
    email: 'danlp6.com@outlook.de',
  },
  record: {
//    CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    A: ['21.234.523.3'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
