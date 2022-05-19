module.exports = {
  okapi: { 'url':'https://harvester-dev-okapi.folio-dev.indexdata.com', 'tenant':'harvesterdev' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false
  },
  modules: {
    '@folio/calendar' : {},
    '@folio/checkin' : {},
    '@folio/checkout' : {},
    '@folio/circulation' : {},
    '@folio/developer' : {},
    '@folio/inventory' : {},
    '@folio/myprofile' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-user' : {},
    '@folio/requests' : {},
    '@folio/servicepoints' : {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
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
