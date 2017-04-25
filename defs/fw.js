// Unyson fw variable
declare var fw:any;

declare type FwEventName = string;
declare type FwEventMap = {
	[eventName: FwEventName]: Function
};

declare type FwPrivateEventElement = {
	context: ?Object,
	listener: ?Function
};

declare type FwPrivateEventBox = {
	[eventName: FwEventName]: FwPrivateEventElement[]
};

declare type FwEventMapOrName = FwEventName | FwEventMap;

declare type FwEventPayload = mixed;

declare type FwEventBox = {
	log(message: string, data: FwEventPayload): void,
	debug(enabled: boolean): FwEventBox,
	on(message: FwEventMapOrName, callback: ?Function, context: ?Object): FwEventBox,
	one(message: FwEventMapOrName, callback: ?Function, context: ?Object): FwEventBox,
	off(message: FwEventMapOrName, callback: ?Function, context: ?Object): FwEventBox,
	trigger(message: FwEventMapOrName, data: FwEventPayload): FwEventBox,
	hasListeners(message: FwEventName): boolean
};

declare var fwEvents: FwEventBox;

declare module 'fw-events' {
  declare var exports: FwEventBox;
}
