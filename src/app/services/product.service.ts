import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product, ProductResponse} from "../models/Product.Interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private readonly apiURL = environment.apiURL;


  constructor(private http: HttpClient) {
  }

  getProducts() : Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiURL + '/products');
  }
}
