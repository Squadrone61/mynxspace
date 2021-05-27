import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnInit,
  NgModule,
} from '@angular/core';
import { ShopItem } from './shop-item';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Observable } from 'rxjs';
import { LoaderService, ThreeCoreModule } from '@angular-three/core';
import { take } from 'rxjs/operators';
import { ThreeGroupModule } from '@angular-three/core/group';

@Component({
  selector: 'ui-shop-item',
  template: `
    <ngt-group
      #group="ngtGroup"
      [position]="item.position"
      (ready)="grp = $event"
      (click)="itemSelected.emit(item)"
      (dblclick)="itemSelected.emit(item)"
    >
    </ngt-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopItemComponent implements OnInit {
  @Input()
  item: ShopItem;
  @Output()
  itemReady = new EventEmitter<boolean>();
  @Output()
  itemSelected = new EventEmitter<ShopItem>();

  gltf$!: Observable<GLTF>;
  grp: THREE.Group;

  constructor(private readonly loaderService: LoaderService) {}

  ngOnInit(): void {
    this.gltf$ = this.loaderService.use(GLTFLoader, this.item.url);
    this.gltf$.pipe(take(1)).subscribe(({ scene }) => {
      scene.lookAt(this.item.lookAt);
      this.shouldCastShadow(scene);
      const sc = this.item.scale;
      scene.scale.set(sc.x, sc.y, sc.z);
      this.grp.add(scene);
      this.itemReady.emit(true);
    });
  }

  shouldCastShadow(s: THREE.Object3D) {
    s.castShadow = true;
    s.children.forEach((obj) => {
      this.shouldCastShadow(obj);
    });
  }
}

@NgModule({
  declarations: [ShopItemComponent],
  exports: [ShopItemComponent],
  imports: [ThreeCoreModule, ThreeGroupModule],
})
export class ShopItemModule {}
