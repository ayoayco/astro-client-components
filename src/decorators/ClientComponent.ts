const ClientComponent = (
  config: string | ({ selector: string, observedProperties?: string[] } & ElementDefinitionOptions)
) => {
  const { selector, observedProperties = [], ...options } =
    typeof config === "string" ? { selector: config, observedProperties: undefined } : config;

  return (target: any, _: any) => {
    target.properties = [...observedProperties]
    // TODO: typeguard to test if target is custom element
    customElements.define(selector, target, options);
    console.log(`>>> registered ${target.name} as ${selector}`);
  };
};
export default ClientComponent;
