module.exports = {
  okapi: { 'url':'https://harvester-dev-okapi.folio-dev.indexdata.com', 'tenant':'harvester' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false
  },

  modules: {
    '@folio/developer' : {},
    '@folio/inventory' : {},
    '@folio/myprofile' : {},
    '@folio/users' : {},
    '@indexdata/harvester-admin': {}
  },

  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/folio-favicon.png',
    },
  },
};
