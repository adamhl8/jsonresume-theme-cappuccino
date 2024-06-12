interface Helpers {
  [key: string]: (...args: any[]) => any;
}

const helpersPlugin = (helpers: Helpers) => {
  return {
    processFnString: (fnString: string, _config: any) => {
      for (const [helperFnName, helperFn] of Object.entries(helpers)) {
        fnString = `var ${helperFnName} = ${helperFn.toString()};\n${fnString}`;
      }

      return fnString;
    },
  };
};

export default helpersPlugin;
