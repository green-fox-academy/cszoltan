abstract class Animals {
  protected name: string;
  protected age: number;
  protected gender: boolean;

  getName(): string {
    return this.name;
  }

  getGender(): string {
    if (this.gender) {
      return 'female';
    } else {
      return 'male';
    }
  }

  getAge(): number {
    return this.age;
  }

  abstract breed(): void;
}

export {Animals};