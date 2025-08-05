/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Alert, AlertFilter, AlertList, AssetKey } from "./alert";
import { Empty } from "./google/protobuf/Empty";
export declare const protobufPackage = "alert";
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
