export class ProductClass {
  id: number
  title: string
  description: string
  image: string
  stars: number
  constructor(id: number, title: string, description: string, image: string, stars: number){
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.stars = stars
  }
}
