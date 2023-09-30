/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IClass {
  title: string;
}
class Component<T> {
  constructor(public props: T) {
    //
    //
  }
}

class Page extends Component<IClass> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
