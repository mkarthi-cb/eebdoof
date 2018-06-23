interface ValidationCallback {
    (string, Event): Promise<boolean>;
}

interface ValidationCallbackWrapper {
    [a: string]:  ValidationCallback;
}

interface RuleValueCallback {
    [a: string]:  (value) => {};
}

export interface ElementSettingsCallbacks {
    onDraftChanged: (string, boolean) => {};
    onLoading: (string, boolean) => {};
    onLoad: (string) => {};
    validations: ValidationCallbackWrapper;
    onRuleValueChange: RuleValueCallback;
}