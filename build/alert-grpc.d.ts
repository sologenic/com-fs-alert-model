/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Alert, AlertFilter, AlertID, AlertList } from "./alert";
import { Empty } from "./google/protobuf/Empty";
export declare const protobufPackage = "alert";
export type AlertServiceService = typeof AlertServiceService;
export declare const AlertServiceService: {
    readonly upsertAlert: {
        readonly path: "/alert.AlertService/UpsertAlert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Alert) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Alert;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly deleteAlert: {
        readonly path: "/alert.AlertService/DeleteAlert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AlertID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AlertID;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly getAlert: {
        readonly path: "/alert.AlertService/GetAlert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AlertID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AlertID;
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
    upsertAlert: handleUnaryCall<Alert, Empty>;
    deleteAlert: handleUnaryCall<AlertID, Empty>;
    getAlert: handleUnaryCall<AlertID, Alert>;
    list: handleUnaryCall<AlertFilter, AlertList>;
}
export interface AlertServiceClient extends Client {
    upsertAlert(request: Alert, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsertAlert(request: Alert, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    upsertAlert(request: Alert, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteAlert(request: AlertID, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteAlert(request: AlertID, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteAlert(request: AlertID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    getAlert(request: AlertID, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    getAlert(request: AlertID, metadata: Metadata, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    getAlert(request: AlertID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Alert) => void): ClientUnaryCall;
    list(request: AlertFilter, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
    list(request: AlertFilter, metadata: Metadata, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
    list(request: AlertFilter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AlertList) => void): ClientUnaryCall;
}
export declare const AlertServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AlertServiceClient;
    service: typeof AlertServiceService;
    serviceName: string;
};
