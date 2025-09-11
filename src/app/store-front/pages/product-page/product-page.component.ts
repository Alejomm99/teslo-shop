import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  productId = inject(ActivatedRoute).snapshot.params['id'];

  productsService = inject(ProductsService);

  productResource = rxResource({
    request: () => ({ id: this.productId }),
    loader: ({ request }) => {
      return this.productsService.getProductById(request.id);
    },
  });
}
