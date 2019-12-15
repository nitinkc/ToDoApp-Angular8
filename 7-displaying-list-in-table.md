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

Display cases in the list form

```html
<tbody>
    <tr *ngFor="let todo of todos">
      <td> {{todo.id}}</td>
      <td>{{todo.description}}</td>
    </tr>
  </tbody>
```


## Displaying the date using the format method with Pipe

```ts      
<td>{{todo.targetDate | date |uppercase}}</td>
```


### Declaring a class for ToDo

```ts
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
```