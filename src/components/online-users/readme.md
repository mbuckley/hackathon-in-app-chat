# iac-online-users



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description             | Type     | Default     |
| -------------- | ---------------- | ----------------------- | -------- | ----------- |
| `loggedInUser` | `logged-in-user` | The logged in user uuid | `string` | `undefined` |
| `onlineUsers`  | `online-users`   | Online Users array      | `any`    | `undefined` |


## Dependencies

### Used by

 - [iac-chat](../containers/chat)

### Depends on

- [iac-user](../user)

### Graph
```mermaid
graph TD;
  iac-online-users --> iac-user
  iac-chat --> iac-online-users
  style iac-online-users fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
