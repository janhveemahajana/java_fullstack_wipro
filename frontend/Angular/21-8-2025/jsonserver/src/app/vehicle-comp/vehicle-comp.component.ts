import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { IVehicle } from '../ivehicle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-comp',
  imports: [FormsModule],
  templateUrl: './vehicle-comp.component.html',
  styleUrl: './vehicle-comp.component.css',
})
export class VehicleCompComponent {
  constructor(private vehicleService: VehicleService) {}

  vehicles: IVehicle[] = [];

  vehicleEdit: IVehicle = {
    id: '',
    make: '',
    fuelType: '',
    model: '',
    price: '',
  };

  vehicleAdd: IVehicle = {
    id: '',
    make: '',
    fuelType: '',
    model: '',
    price: '',
  };

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      (data: IVehicle[]) => {
        this.vehicles = data;
        console.log('success', data);
      },
      (error) => {
        console.log('error fetching vehicles: ', error);
      }
    );
  }

  edit(vehicleId: string) {
    console.log('Edit vehicle with ID:', vehicleId);
    this.vehicleService.getVehiclesById(vehicleId).subscribe(
      (vehicle: IVehicle) => {
        console.log('Vehicle details:', vehicle);
        this.vehicleEdit = vehicle;
        console.log('Vehicle for editing:', this.vehicleEdit);
      },
      (error) => {
        console.error('Error fetching vehicle by ID:', error);
      }
    );
  }

  update() {
    console.log('Updating vehicle:', this.vehicleEdit);
    this.vehicleService.saveVehicle(this.vehicleEdit).subscribe(
      (updatedVehicle: IVehicle) => {
        console.log('Vehicle updated successfully:', updatedVehicle);
        const index = this.vehicles.findIndex(
          (vehicle) => vehicle.id === updatedVehicle.id
        );
        if (index !== -1) {
          this.vehicles[index] = updatedVehicle;
        }
        this.vehicleEdit = {
          id: '',
          make: '',
          fuelType: '',
          model: '',
          price: ''
        };
        this.ngOnInit();
      },
      (error) => {
        console.error('Error updating vehicle:', error);
      }
    );
  }

  delete(vehicleId: string) {
    this.vehicleService.deleteVehicle(vehicleId).subscribe(
      () => {
        console.log('Vehicle deleted successfully:', vehicleId);
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== vehicleId);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting vehicle:', error);
      }
    );
  }

  save() {
    console.log('saving data-' + this.vehicleAdd);
    this.vehicleService.saveVehicle(this.vehicleAdd).subscribe(
      (newVehicle: IVehicle) => {
        console.log('Vehicle saved successfully:', newVehicle);
        this.vehicles.push(newVehicle);
        this.vehicleAdd = {
          id: '',
          make: '',
          fuelType: '',
          model: '',
          price: ''
        };
      },
      (error) => {
        console.error('Error saving vehicle:', error);
      }
    );
  }
}
