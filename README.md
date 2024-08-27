# Reproduction Example for [#493](https://github.com/sst/open-next/issues/493)

1. Deploy the infrastructure with
   ```bash
   pnpm sst deploy
   ```

2. Visit the web page (url should be outputed by the previous command).

3. Go to ConfigLambda logs to check if it was invoked.

4 Visit a few `/[lang]/hello` pages.

5. Go to ConfigLambda logs to check them now.
