export class Receipe {
  public name: string;
  public description: string;
  public impagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.impagePath = imagePath;
  }
}
