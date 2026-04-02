# Reproduction

## Fail case

`main` branch: will fail on build (`npm run build`) with errors similar to the following:

```bash
index.ts:6:24 - error TS2339: Property 'raxConfig' does not exist on type 'Omit<AxiosDefaults<any>, "headers"> & { headers: HeadersDefaults & { [key: string]: AxiosHeaderValue; }; }'.

6   axiosClient.defaults.raxConfig = {
                         ~~~~~~~~~

index.ts:9:14 - error TS2345: Argument of type 'import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").AxiosInstance' is not assignable to parameter of type 'import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index", { with: { "resolution-mode": "import" } }).AxiosInstance'.
  The types of 'interceptors.request.handlers' are incompatible between these types.
    Type 'import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").InternalAxiosRequestConfig<any>>[] | undefined' is not assignable to type 'AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index", { with: { "resolution-mode": "import" } }).InternalAxiosRequestConfig<any>>[] | undefined'.
      Type 'import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").InternalAxiosRequestConfig<any>>[]' is not assignable to type 'AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index", { with: { "resolution-mode": "import" } }).InternalAxiosRequestConfig<any>>[]'.
        Type 'import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index").InternalAxiosRequestConfig<any>>' is not assignable to type 'AxiosInterceptorHandler<import("/Users/amann/work/saf/retry-axios-cjs-resolution-reproduction/node_modules/axios/index", { with: { "resolution-mode": "import" } }).InternalAxiosRequestConfig<any>>'.
          Types of property 'runWhen' are incompatible.
            Type '((config: AxiosRequestConfig<any>) => boolean) | undefined' is not assignable to type '(config: AxiosRequestConfig<any>) => boolean | null'.
              Type 'undefined' is not assignable to type '(config: AxiosRequestConfig<any>) => boolean | null'.

9   rax.attach(axiosClient);
               ~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:6
```

## Pass case

`fork` branch: will pass on build (`npm run build`) and succeed at running the test (`npm run test`), which just does the attach command.

The only difference is providing explicit `import` vs `require` types, which are the exact same aside from the filename ending in `cts`.
