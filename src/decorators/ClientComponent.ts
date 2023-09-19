import WebComponent from "web-component-base";

const ClientComponent = (
  config: string | ({ selector: string } & ElementDefinitionOptions)
) => {
  const { selector, ...options } =
    typeof config === "string" ? { selector: config } : config;

  return function(target: any, _: any) {
    customElements.define(selector, target, options);
    console.log(`>>> registered ${target.name} as ${selector}`);
    Object.assign(target.prototype, WebComponent.prototype);
  };
};
export default ClientComponent;
