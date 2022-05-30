
interface Course {
  name: string,
  duration?: number,
  educator: string
}

class CreateCourseService {

  execute({ duration = 8, educator, name }: Course) {
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService()
// padrão singleton: exportar com new posso importar quantas vezes eu quiser essa classe que só haverá uma instância
