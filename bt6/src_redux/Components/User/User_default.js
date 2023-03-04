import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        {
            this.props.lsUser.map(
                n => { return <p>Name</p>
            })
        }
        {
          // Nếu nhiều component thì mình phải truyền dần dần từ 3->2->1 rất phức tạp
          /* Component 1
                - Component 2
                    - Component 3
          */
          // Store: Là 1 object chứa tất cả state của ứng dụng thay vì lưu state thì nó sẽ lưu reducer
          // Action: Ví dụ ta có 1 state là counter có action là Increment và Decrement 
          // => việc xử lý thay state thì sẽ nhường cho reducer
          // Reducer: Tương ứng là 1 state nhưng khác ở chổ có kèm theo mô tả đó là những Action để thay đổi state
          // Dispath: là một phương thức hổ trợ gọi các action

        }
      </div>
    )
  }
}
