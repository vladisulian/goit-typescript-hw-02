/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IClass {
  title?: string;
}
class Component<T extends IClass> {
  constructor(public props: T) {
    //
    //
  }
}

class Page<T extends IClass> extends Component<T> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
