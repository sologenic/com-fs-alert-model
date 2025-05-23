import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "alert";
export declare enum AlertStatus {
    DO_NOT_USE = 0,
    ACTIVE = 1,
    TRIGGERED = 2,
    CANCELLED = 3,
    UNRECOGNIZED = -1
}
export declare function alertStatusFromJSON(object: any): AlertStatus;
export declare function alertStatusToJSON(object: AlertStatus): string;
export interface Alert {
    Alert: AlertDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface AlertDetails {
    AlertID: number;
    Account: string;
    AssetKey: string;
    TargetPrice: number;
    Status: AlertStatus;
    OrganizationID: string;
}
export interface AlertID {
    Value: string;
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface AlertFilter {
    OrganizationID: string;
    Network?: Network | undefined;
    Offset?: number | undefined;
    Limit?: number | undefined;
}
export interface AlertList {
    Alerts: Alert[];
    Offset?: number | undefined;
    Limit?: number | undefined;
}
export declare const Alert: {
    encode(message: Alert, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Alert;
    fromJSON(object: any): Alert;
    toJSON(message: Alert): unknown;
    create<I extends {
        Alert?: {
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        Alert?: ({
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } & {
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } & { [K in Exclude<keyof I["Alert"], keyof AlertDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_2 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Alert>]: never; }>(base?: I | undefined): Alert;
    fromPartial<I_1 extends {
        Alert?: {
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        Alert?: ({
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } & {
            AlertID?: number | undefined;
            Account?: string | undefined;
            AssetKey?: string | undefined;
            TargetPrice?: number | undefined;
            Status?: AlertStatus | undefined;
            OrganizationID?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["Alert"], keyof AlertDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Alert>]: never; }>(object: I_1): Alert;
};
export declare const AlertDetails: {
    encode(message: AlertDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlertDetails;
    fromJSON(object: any): AlertDetails;
    toJSON(message: AlertDetails): unknown;
    create<I extends {
        AlertID?: number | undefined;
        Account?: string | undefined;
        AssetKey?: string | undefined;
        TargetPrice?: number | undefined;
        Status?: AlertStatus | undefined;
        OrganizationID?: string | undefined;
    } & {
        AlertID?: number | undefined;
        Account?: string | undefined;
        AssetKey?: string | undefined;
        TargetPrice?: number | undefined;
        Status?: AlertStatus | undefined;
        OrganizationID?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AlertDetails>]: never; }>(base?: I | undefined): AlertDetails;
    fromPartial<I_1 extends {
        AlertID?: number | undefined;
        Account?: string | undefined;
        AssetKey?: string | undefined;
        TargetPrice?: number | undefined;
        Status?: AlertStatus | undefined;
        OrganizationID?: string | undefined;
    } & {
        AlertID?: number | undefined;
        Account?: string | undefined;
        AssetKey?: string | undefined;
        TargetPrice?: number | undefined;
        Status?: AlertStatus | undefined;
        OrganizationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AlertDetails>]: never; }>(object: I_1): AlertDetails;
};
export declare const AlertID: {
    encode(message: AlertID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlertID;
    fromJSON(object: any): AlertID;
    toJSON(message: AlertID): unknown;
    create<I extends {
        Value?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Value?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof AlertID>]: never; }>(base?: I | undefined): AlertID;
    fromPartial<I_1 extends {
        Value?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Value?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AlertID>]: never; }>(object: I_1): AlertID;
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
export declare const AlertList: {
    encode(message: AlertList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlertList;
    fromJSON(object: any): AlertList;
    toJSON(message: AlertList): unknown;
    create<I extends {
        Alerts?: {
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & {
        Alerts?: ({
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            Alert?: ({
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } & {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } & { [K in Exclude<keyof I["Alerts"][number]["Alert"], keyof AlertDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["Alerts"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Alerts"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["Alerts"][number], keyof Alert>]: never; })[] & { [K_4 in Exclude<keyof I["Alerts"], keyof {
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & { [K_5 in Exclude<keyof I, keyof AlertList>]: never; }>(base?: I | undefined): AlertList;
    fromPartial<I_1 extends {
        Alerts?: {
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & {
        Alerts?: ({
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            Alert?: ({
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } & {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["Alerts"][number]["Alert"], keyof AlertDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["Alerts"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["Alerts"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["Alerts"][number], keyof Alert>]: never; })[] & { [K_10 in Exclude<keyof I_1["Alerts"], keyof {
            Alert?: {
                AlertID?: number | undefined;
                Account?: string | undefined;
                AssetKey?: string | undefined;
                TargetPrice?: number | undefined;
                Status?: AlertStatus | undefined;
                OrganizationID?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof AlertList>]: never; }>(object: I_1): AlertList;
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
