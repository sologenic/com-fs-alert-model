/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Alert, AlertList } from "./alert";
import { Empty } from "./google/protobuf/Empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "alert";
export interface AssetKey {
    Account: string;
    AssetKey: string;
    OrganizationID: string;
    Network?: Network | undefined;
    AlertID: number;
}
export interface AlertFilter {
    OrganizationID: string;
    Network?: Network | undefined;
    Offset?: number | undefined;
    Limit?: number | undefined;
}
export declare const AssetKey: {
    encode(message: AssetKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetKey;
    fromJSON(object: any): AssetKey;
    toJSON(message: AssetKey): unknown;
    create<I extends {
        Account?: string | undefined;
        AssetKey?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        AlertID?: number | undefined;
    } & {
        Account?: string | undefined;
        AssetKey?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        AlertID?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AssetKey>]: never; }>(base?: I | undefined): AssetKey;
    fromPartial<I_1 extends {
        Account?: string | undefined;
        AssetKey?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        AlertID?: number | undefined;
    } & {
        Account?: string | undefined;
        AssetKey?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        AlertID?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AssetKey>]: never; }>(object: I_1): AssetKey;
};
export declare const AlertFilter: {
    encode(message: AlertFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlertFilter;
    fromJSON(object: any): AlertFilter;
    toJSON(message: AlertFilter): unknown;
    create<I extends {
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & {
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AlertFilter>]: never; }>(base?: I | undefined): AlertFilter;
    fromPartial<I_1 extends {
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & {
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AlertFilter>]: never; }>(object: I_1): AlertFilter;
};
export type AlertServiceService = typeof AlertServiceService;
export declare const AlertServiceService: {
    readonly upsert: {
        readonly path: "/alert.AlertService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Alert) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Alert;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly delete: {
        readonly path: "/alert.AlertService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetKey;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly get: {
        readonly path: "/alert.AlertService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AssetKey) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AssetKey;
        readonly responseSerialize: (value: Alert) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Alert;
    };
    readonly list: {
        readonly path: "/alert.AlertService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AlertFilter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AlertFilter;
        readonly responseSerialize: (value: AlertList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AlertList;
    };
};
export interface AlertServiceServer extends UntypedServiceImplementation {
    upsert: handleUnaryCall<Alert, Empty>;
    delete: handleUnaryCall<AssetKey, Empty>;
    get: handleUnaryCall<AssetKey, Alert>;
    list: handleUnaryCall<AlertFilter, AlertList>;
}
export interface AlertServiceClient extends Client {
    upsert(request: Alert, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsert(request: Alert, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsert(request: Alert, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: AssetKey, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: AssetKey, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    delete(request: AssetKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    get(request: AssetKey, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    get(request: AssetKey, metadata: Metadata, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    get(request: AssetKey, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    list(request: AlertFilter, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
    list(request: AlertFilter, metadata: Metadata, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
    list(request: AlertFilter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
}
export declare const AlertServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AlertServiceClient;
    service: typeof AlertServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
