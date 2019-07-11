# iac-chat-container



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type  | Default     |
| ------------- | -------------- | ----------- | ----- | ----------- |
| `pubnub`      | `pubnub`       |             | `any` | `undefined` |
| `state`       | `state`        |             | `any` | `undefined` |
| `userProfile` | `user-profile` |             | `any` | `undefined` |
| `uuid`        | `uuid`         |             | `any` | `undefined` |


## Dependencies

### Depends on

- [iac-header](../../header)
- [iac-message-body](../message-body)
- [iac-message-list](../../message-list)

### Graph
```mermaid
graph TD;
  iac-chat --> iac-header
  iac-chat --> iac-message-body
  iac-chat --> iac-message-list
  iac-message-list --> iac-history-message-list
  iac-message-list --> iac-sender-message-list
  style iac-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
