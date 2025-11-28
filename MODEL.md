# Alert Documentation

## Table of Contents

- [alert.proto](#alert)

## Overview

The Alert provides data structures and definitions for managing alert within the system.

## alert.proto {#alert}

### Package Information

- **Package Name**: `alert`
- **Go Package Path**: `github.com/sologenic/com-fs-alert-model;alert`

### Overview

The `alert.proto` file defines the Alert model.

### Messages

#### Alert

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| TargetPrice | `double` | 4 |  |
| Status | `AlertStatus` | 5 |  |
| OrganizationID | `string` | 6 |  |

#### AssetKey

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Account | `string` | 1 |  |
| AssetKey | `string` | 2 |  |
| OrganizationID | `string` | 3 |  |
| Network | `Network` | 4 |  |

#### AlertFilter

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| OrganizationID | `string` | 1 |  |
| Network | `Network` | 3 |  |
| Offset | `int32` | 4 |  |
| Limit | `int32` | 5 |  |

#### AlertList

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Alerts | `Alert` | 1 |  |
| TotalCount | `int32` | 2 |  |

## Version Information

This documentation corresponds to the current version of the proto files in this repository.

## Support

For more information, see:
- README.md in this repository
- Protocol Buffer documentation
