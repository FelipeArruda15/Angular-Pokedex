import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  constructor(private service: PokeApiService) { }

  ngOnInit(): void {
    this.service.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results
      }
    );
  }

}
