export type UserDefinedSlot = {
  resolverTypeName: string;
  resolverFieldName: string;
  slotName: string;
  requestResolver?: UserDefinedResolver;
  responseResolver?: UserDefinedResolver;
};

export type UserDefinedResolver = {
  fileName: string;
  template: string;
};

export type OverrideConfig = {
  overrideFlag: boolean;
  overrideDir: string;
  resourceName: string;
};
