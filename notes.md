# Notes on Recitation 3: Testing

## Step 0: Convert Backend to Typescript
1. Convert index.js to index.ts
2. Move index.ts to a /src folder (for organization)
3. `npm install --save-dev typescript @types/node @types/express`
4. `tsc -init`
5. Configure the tsconfig.json with appropriate module settings (commonjs, esinterop, target, resolvejsonmodule).
5. Add the include block at the end of tsconfig.json
6. Switch `require` statements to `import` statements in `index.ts`
7. Compile with `tsc -p <path-to-config>`
8. Run `node src/index.js`

## Step 1: Install Jest (and ts-jest)
1. `npm install --save-dev jest typescript ts-jest @types/jest`
2. `npx ts-jest config:init`
3. Change test script to run `jest` instead of default (in package.json)
5. Create `helpers.ts` file for increased testability
6. Write tests in `/tests/<filename>.test.ts`
7. run `npm t`