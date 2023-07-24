import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService){}     //inyeccion de service


    get characters():Character[]{
        // return this.dbzService.characters;
        return [...this.dbzService.characters];

    }

    onDeleteCharacter(id: string):void{
        this.dbzService.deleteCharacterById(id)
    }
    
    onNewCharacter(character: Character):void{
        this.dbzService.addCharacter(character);
    }
}