import { SelectedLocation } from './search/search.model';

export interface AppState {
  readonly location: SelectedLocation[];
}
