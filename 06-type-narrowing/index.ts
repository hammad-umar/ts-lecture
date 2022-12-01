// Type Narrowing In Detail.

// 1. "typeof" Guard.
// -> "typeof" Guard simply involve doing a type check before working with
// a value.
// -> We use "typeof" when we are working with primitive types.

function tripleInput(value: string | number) {
  if (typeof value === 'string') {
    return value.repeat(3)
  }

  return value * 3
}

tripleInput('Hi') // HiHiHi
tripleInput(2) // 6

// 2. Truthiness Guards.
// -> Truthiness Guards involve checking a value being truthy or falsy
// before working with it.

function printLetters(word: string | null): void {
  if (!word) {
    console.log('No Word Is Provided!')
  } else {
    for (let char of word) {
      console.log(char)
    }
  }
}

printLetters('')
printLetters('LEARNINGTOCODE!')

// 3. Equality Narrowing.
// -> It involve comparing types to each other before doing certain
// operations with values.
// -> By comparing values against one another we make sure that they are
// the same type of values.

const doSomething = (x: string | number, y: string | boolean) => {
  if (x === y) {
    x.toUpperCase()
    y.toUpperCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

// 4. "in" Operator Narrowing.
// -> "in" operator checks if a certain property exists in an object or not.
// -> We use "in" operator when we are working with objects.

interface Movie {
  title: string
  duration: number
}

interface TvShow {
  title: string
  numOfEpisodes: number
  episodeDuration: number
}

const getDuration = (media: Movie | TvShow) => {
  if ('numOfEpisodes' in media) {
    return media.numOfEpisodes * media.episodeDuration
  }

  return media.duration
}

console.log(getDuration({ title: 'Amadeus', duration: 145 }))

console.log(
  getDuration({
    title: 'SpongeBob',
    numOfEpisodes: 12,
    episodeDuration: 45,
  })
)

// 5. "instanceof" Narrowing.
// -> It is used to check if one thing is instance of another thing.
// -> This can help us narrow types when working with classes.

function printFullDate(date: Date | string): string {
  if (date instanceof Date) {
    return date.toUTCString()
  }

  return new Date(date).toUTCString()
}

class Student {
  constructor(private studentName: string) {}

  get getStudentName() {
    return this.studentName
  }
}

class Teacher {
  constructor(private teacherName: string) {}

  get getTeacherName() {
    return this.teacherName
  }
}

const printName = (entity: Student | Teacher) => {
  if (entity instanceof Student) {
    console.log(entity.getStudentName)
  } else {
    console.log(entity.getTeacherName)
  }
}

printName(new Teacher('ABC')) // ABC
printName(new Student('Ali')) // Ali
