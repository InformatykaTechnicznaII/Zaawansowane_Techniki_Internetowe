import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: '[app-shopping-edit]',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') shoppingListItem: ElementRef;
  @ViewChild('amountInput') shoppingListItemAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddNewIngredients(): void {
    this.shoppingListService.onAddIngredient(
      new Ingredient(
        this.shoppingListItem.nativeElement.value,
        this.shoppingListItemAmount.nativeElement.value
      )
    );
  }
}
