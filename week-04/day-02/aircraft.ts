class Aircraft {
  private type: string;
  ammo: number;
  maxAmmo: number;
  baseDamage: number;

  constructor (type: string) {
    if (type === 'F16') {
      this.baseDamage = 30;
      this.maxAmmo = 8;
    } else {
      this.baseDamage = 50;
      this.maxAmmo = 12;
    }
    this.type = type;
    this.ammo = 0;
  }

  fight(): number {
    let damage: number = this.ammo * this.baseDamage;
    
    this.ammo = 0;

    return damage;
  }

  refill(stock: number): number {
    if (this.maxAmmo >= stock && this.ammo !== this.maxAmmo) {
      this.ammo = stock;
      return 0;
    } else if (this.maxAmmo !== this.ammo) {
      this.ammo = this.maxAmmo;
      return stock - this.ammo;
    } else {
      return stock;
    }
  }

  getType() {
    return this.type;
  }

  getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.ammo}`;
  }

  isPriority(): boolean {
    if (this.type === 'F16') {
      return false;
    } else {
      return true;
    }
  }
}

export {Aircraft};
