# Alert Documentation

## Table of Contents

- [Overview](#overview)
- [alert.proto](#alertproto)
  - [Messages](#messages)
    - [Alert](#alert)
    - [AlertDetails](#alertdetails)
    - [AssetKey](#assetkey)
    - [AlertFilter](#alertfilter)
    - [AlertList](#alertlist)
  - [Enums](#enums)
    - [AlertStatus](#alertstatus)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Alert model provides a comprehensive data structure for managing price alerts within the system. This model supports price monitoring, alert status tracking, and organizational context for multi-tenant environments.

Key features of the alert model include:
- **Price Monitoring**: Tracks target prices for assets and accounts
- **Status Management**: Tracks alert status (ACTIVE, TRIGGERED, CANCELLED) for administrative control
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Organizational Context**: Links alerts to organizations via OrganizationID
- **Pagination Support**: Provides offset-based pagination for alert collections
- **Network Support**: Optional network filtering for multi-network environments

## alert.proto

### Package Information

- **Package Name**: `alert`
- **Go Package Path**: `github.com/sologenic/com-fs-alert-model;alert`

### Overview

The `alert.proto` file defines the core alert model for price alert management. It provides message types for representing alert data, filtering, and operations. The file integrates with external utility libraries: `metadata.proto` for network and version information, and `audit.proto` for audit trail tracking.

### Messages

#### Alert {#alert}

The `Alert` message is the top-level container for alert information, combining alert details with metadata and audit information.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Alert | `AlertDetails` | Required | Core alert information including price target, account, asset, and status |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new alert records
- Retrieving alert information
- Updating alert data
- Tracking alert history and changes

**Important Notes:**
- All three fields (Alert, MetaData, Audit) are required for a complete alert record
- The MetaData field provides network context and versioning information
- The Audit field tracks when alerts are created, modified, or accessed

#### AlertDetails {#alertdetails}

The `AlertDetails` message contains all the core information about a price alert, including the target price, account, asset, and current status.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AlertID | `int64` | Required | Unique identifier for the alert |
| Account | `string` | Required | Account address or identifier associated with the alert |
| AssetKey | `string` | Required | Asset identifier or currency code for the alert |
| TargetPrice | `double` | Required | Target price threshold that triggers the alert |
| Status | `AlertStatus` | Required | Current status of the alert (see AlertStatus enum) |
| OrganizationID | `string` | Required | UUID of the organization this alert belongs to |

**Use Cases:**
- Creating new price alerts with target prices
- Updating alert information (e.g., changing target price)
- Tracking alert status for administrative purposes
- Associating alerts with specific organizations in multi-tenant systems

**Important Notes:**
- The `AlertID` field must be a unique identifier for the alert
- The `Status` field determines the current state of the alert (ACTIVE, TRIGGERED, or CANCELLED)
- The `OrganizationID` must be a valid UUID format
- The `TargetPrice` represents the price threshold that will trigger the alert

#### AssetKey {#assetkey}

The `AssetKey` message provides a composite key for identifying and referencing alerts by account, asset, organization, and optional network context.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Account | `string` | Required | Account address or identifier |
| AssetKey | `string` | Required | Asset identifier or currency code |
| OrganizationID | `string` | Required | UUID of the organization this alert belongs to |
| Network | `metadata.Network` | Optional | Network context for multi-network environments |
| AlertID | `string` | Required | Alert identifier for referencing a specific alert |

**Use Cases:**
- Identifying specific alerts for retrieval or deletion operations
- Filtering alerts by account, asset, or organization
- Supporting multi-network deployments with network-specific alerts
- Referencing alerts in service calls

**Important Notes:**
- The `OrganizationID` must be a valid UUID format
- The `Network` field is optional and can be used to filter alerts by network
- All fields together form a composite key for uniquely identifying alerts
- The `AlertID` field is a string identifier for the alert

#### AlertFilter {#alertfilter}

The `AlertFilter` message provides filtering and pagination options for querying collections of alerts.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrganizationID | `string` | Required | UUID of the organization to filter alerts by |
| Network | `metadata.Network` | Optional | Network context for filtering alerts in multi-network environments |
| Offset | `int32` | Optional | Offset value for pagination (number of records to skip) |
| Limit | `int32` | Optional | Maximum number of records to return in the result set |

**Use Cases:**
- Listing alerts for a specific organization
- Filtering alerts by network in multi-network deployments
- Implementing pagination for large alert collections
- Building search and filter interfaces for alert management

**Important Notes:**
- The `OrganizationID` must be a valid UUID format and is required
- The `Network` field is optional and can be used to filter by network
- The `Offset` field indicates how many records to skip (0-based)
- The `Limit` field controls the maximum number of results returned
- If `Offset` is not set (or is 0), results start from the beginning
- Clients should use `Offset` and `Limit` together for pagination

#### AlertList {#alertlist}

The `AlertList` message represents a paginated collection of alerts with total count information.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Alerts | `Alert` (repeated) | Optional | List of alert records matching the filter criteria |
| TotalCount | `int32` | Required | Total number of alerts matching the filter (regardless of pagination) |

**Use Cases:**
- Returning paginated lists of alerts from queries or searches
- Implementing pagination in alert listing APIs
- Handling large alert collections efficiently
- Providing total count information for UI pagination controls

**Important Notes:**
- The `Alerts` field is a repeated field that can contain zero or more alert records
- The `TotalCount` represents the total number of matching alerts, not just the count in the current page
- Clients can use `TotalCount` to calculate total pages and display pagination information
- An empty `Alerts` list with `TotalCount` > 0 indicates there are more results available via pagination

### Enums

#### AlertStatus {#alertstatus}

The `AlertStatus` enum defines the possible states for price alerts, allowing for status tracking and lifecycle management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| DO_NOT_USE | 0 | Default/unused value (protobuf convention) |
| ACTIVE | 1 | Alert is active and monitoring for price threshold |
| TRIGGERED | 2 | Alert has been triggered (price reached target) |
| CANCELLED | 3 | Alert has been cancelled and is no longer active |

**Use Cases:**
- Setting alert status when creating or updating alerts
- Filtering alerts by status in queries
- Tracking alert lifecycle from creation to trigger or cancellation
- Enforcing business logic based on alert status (e.g., preventing modifications to triggered alerts)

**Important Notes:**
- The `DO_NOT_USE` value (0) follows protobuf conventions for default enum values and should not be actively used
- Only valid status values (ACTIVE, TRIGGERED, CANCELLED) should be used in production code
- Status changes should be tracked in audit trails for compliance purposes
- Once an alert is TRIGGERED or CANCELLED, it typically cannot be reactivated without creating a new alert

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `alert.proto`. The proto file uses `proto3` syntax. When referencing this documentation, ensure that the version of the proto file matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `alert.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto` - For network and metadata information
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto` - For audit trail information
