# *ngFor for displaying a list in Table


component typescript
```ts
//ToDo Array of Object
  todos = [
    {id: 1, description : 'activity 1'},
    {id: 2, description : 'activity 2'},
    {id: 3, description : 'activity 3'},
    {id: 4, description : 'activity 4'},
    {id: 5, description : 'activity 5'}

  ]
```
```html
<tbody>
    <tr *ngFor="let todo of todos">
      <td> {{todo.id}}</td>
      <td>{{todo.description}}</td>
    </tr>
  </tbody>
```
