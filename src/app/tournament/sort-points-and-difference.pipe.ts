import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './tournament.component';


@Pipe({
  name: 'sortPointsAndDifference'
})
export class SortPointsAndDifferencePipe implements PipeTransform {
  transform(gameResults: Game[]): Game[] {
    return gameResults.sort((a, b) => {
      // Sort by points
      if (a.pointsHome + a.pointsGuest !== b.pointsHome + b.pointsGuest) {
        return (b.pointsHome + b.pointsGuest) - (a.pointsHome + a.pointsGuest);
      }
      // Sort by goal difference
      return (b.homeGoals + b.guestGoals) - (a.homeGoals + a.guestGoals);
    });
  }
}
