
import { PipeTransform, Pipe } from '@angular/core';
import { TideEvent } from './app.models';

@Pipe({
    name: 'eventProgram'
})
export class MatchesCategoryPipe implements PipeTransform {
    transform(items: Array<TideEvent>, program: string): Array<TideEvent> {
        return items.filter(item => item.program === program);
    }
}

@Pipe({
    name: 'eventStatus'
})
export class MatchesCompletionPipe implements PipeTransform {
    transform(items: Array<TideEvent>, completionStatus: boolean): Array<TideEvent> {
        return items.filter(item => item.completed === completionStatus);
    }
}