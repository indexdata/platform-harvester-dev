### Steps for building stripes bundle with ui-harvester-admin (main branch)

* Clone https://github.com/indexdata/platform-harvester-dev repository

```
git clone https://github.com/indexdata/platform-harvester-dev
```

* Build Stripes bundle in Docker container

```
cd platform-harvester-dev
docker build -t stripes-harvester-admin -f docker/Dockerfile --build-arg OKAPI_URL=YOUR-LOCAL-OKAPI --build-arg TENANT_ID=YOUR-TENANT-NAME .
```

* Run nginx docker container with Stripes bundle (example)

```
docker run -d -p "80:80" gbv-stripes-harvester-admin 
```

* Clone https://github.com/indexdata/ui-harvester-admin repository

```
cd ui-harvester-admin
yarn install
yarn build-mod-descriptor
```

* Post ui-harvester-admin odule decriptor to local Okapi instance (with valid supertenant $OKAPI_TOKEN) 
  
```
curl -w '\n' -i -H 'Content-Type: application/json' -H "X-Okapi-Token: $OKAPI_TOKEN" https://YOUR-LOCAL-OKAPI/_/proxy/modules -d @module-descriptor.json -X POST
```

* Enable ui-harvester-admin for tenant

```
curl -w '\n' -i -H 'Content-Type: application/json' -H "X-Okapi-Token: $OKAPI_TOKEN https://YOUR-LOCAL-OKAPI/_/proxy/tenants/YOUR-TENANT/install -X POST -d '[{"id": "indexdata_harvester-admin-0.1.0","action":"enable"}]'
```

* Grant tenant admin user (or another designated user) 'ui-harvester-admin.all' permission
