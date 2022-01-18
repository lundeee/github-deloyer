# github-deployer

```npm i```

Add shell scripts to ```scripts/``` folder.

Rename ```config.example.js``` to ```config.js```.
Add projects names and scripts. 

Scripts strings starting with . or / are not modified. 
All others are assumed to be in ```scripts/`` folder.
Change script permissions to ```chmod +x ....```
 
Rename env.example to .env and modify settings to your needs.

Github webhook ```Content type: application/json```
Run to start:
```node src/app.js```
