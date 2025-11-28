# Alert Documentation

## Table of Contents

- [Overview](#overview)
- [alert.proto](#alert)
  - [Messages](#messages)
    - [Alert](#alert)
    - [AlertDetails](#alertdetails)
    - [AssetKey](#assetkey)
    - [AlertFilter](#alertfilter)
    - [AlertList](#alertlist)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Alert provides a comprehensive data structure for managing alert within the system. This model supports metadata and audit: includes metadata and audit trails for tracking changes, identification: provides unique identifiers for alert, status management: tracks status for administrative control, and more. 

Key features of the {model_name.lower()} model include:
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Identification**: Provides unique identifiers for alert
- **Status Management**: Tracks status for administrative control
- **Organizational Context**: Links items to organizations via OrganizationID
- **Pagination Support**: Provides offset-based pagination for collections

## alert.proto

### Package Information

- **Package Name**: `alert`
- **Go Package Path**: `github.com/sologenic/com-fs-alert-model;alert`

### Overview

The `alert.proto` file defines the core alert model for alert management. It provides message types for representing alert data and operations. The file integrates with external utility libraries: `metadata.proto`, `audit.proto`.

### Messages

#### Alert {#alert}

The `Alert` message provides alert data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Alert | `AlertDetails` | Required | Alert field |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new alert records
- Retrieving alert information
- Updating alert data

**Important Notes:**
- This message provides the alert representation

#### AlertDetails {#alertdetails}

The `AlertDetails` message contains all the core information about a alert, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AlertID | `int64` | Required | Unique identifier for the alert |
| Account | `string` | Required | Account value |
| AssetKey | `string` | Required | AssetKey value |
| TargetPrice | `double` | Required | TargetPrice field |
| Status | `AlertStatus` | Required | Current status of this item (see related enum) |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |

**Use Cases:**
- Creating new alert records with complete information
- Updating alert information
- Tracking status for administrative purposes
- Associating items with specific organizations

**Important Notes:**
- The `AlertID` field must match a valid identifier format
- The `Status` field determines the current state of this item
- The `OrganizationID` must be a valid UUID format

#### AssetKey {#assetkey}

The `AssetKey` message provides assetkey data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Account | `string` | Required | Account value |
| AssetKey | `string` | Required | AssetKey value |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |

**Use Cases:**
- Creating new assetkey records
- Retrieving assetkey information
- Updating assetkey data
- Associating items with specific organizations

**Important Notes:**
- The `OrganizationID` must be a valid UUID format

#### AlertFilter {#alertfilter}

The `AlertFilter` message provides alertfilter data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |
| Offset | `int32` | Optional | Offset field |
| Limit | `int32` | Optional | Limit field |

**Use Cases:**
- Creating new alertfilter records
- Retrieving alertfilter information
- Updating alertfilter data
- Associating items with specific organizations
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- The `OrganizationID` must be a valid UUID format
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### AlertList {#alertlist}

The `AlertList` message represents a collection of alertlist with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Alerts | `Alert` | Optional | Alerts field |
| TotalCount | `int32` | Required | TotalCount field |

**Use Cases:**
- Returning paginated lists of alertlist from queries or searches
- Implementing pagination in alertlist listing APIs
- Handling large alertlist efficiently

**Important Notes:**
- This message provides the alertlist representation

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `alert.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `alert.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
