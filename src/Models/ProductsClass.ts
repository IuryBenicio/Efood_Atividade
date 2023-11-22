export class ProductClass {
  id: number
  title: string
  description: string
  image: string
  stars: number
  tags: string
  destaqueDaSemana?: boolean

  constructor(id: number, title: string, description: string, image: string, stars: number, tags: string, destaqueDaSemana?: boolean){
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.stars = stars
    this.tags = tags
    this.destaqueDaSemana = destaqueDaSemana
  }
}
