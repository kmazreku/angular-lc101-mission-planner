import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [
    "Habitat dome",
    " Drones",
    "Food containers",
    "Oxygen tanks",
  ];
  toolBeingEdited: string = null;

  constructor() {}

  ngOnInit() {}
  addEquipment(tools: string) {
    this.equipment.push(tools);
  }
  editEquipment(item: string) {
    this.toolBeingEdited = item;
  }
}
