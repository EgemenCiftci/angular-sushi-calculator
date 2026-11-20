# Angular Sushi Calculator

## Deployment

Pushes to `main` build the production app and deploy it to [sushi-calc.web.app](https://sushi-calc.web.app/).

Before deploying, add a repository Actions secret named `FIREBASE_SERVICE_ACCOUNT` containing the JSON key for a service account in the `sushi-calc` Firebase project. Grant it the Firebase Hosting Admin and Service Usage API Keys Viewer roles. Keep the key in GitHub Secrets; do not commit it to the repository.
