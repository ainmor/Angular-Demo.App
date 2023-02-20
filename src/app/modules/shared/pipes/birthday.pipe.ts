import {Pipe, PipeTransform} from "@angular/core";


@Pipe ({
  name: 'birthday'
})



export class BirthdayPipe implements PipeTransform{
  transform(birthDay: Date): string {
    return 'My birthday is on ' + birthDay;
  }
}
