import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { DocuInterface } from "../types/docu.interface";

@Injectable({
    providedIn: 'root',
 })

export class DocsService{

    constructor(private http: HttpClient) {}

    getFoo() : string{

        return "foo"

    }

    getDocs(): Observable<DocuInterface[]>{

        return this.http.get<DocuInterface[]>("http://localhost:3000/contents")

    }

    removeDocs(id: string): Observable<{}> {

        return this.http.delete("http://localhost:3000/contents/${id}")

    }

    addDocs(name: string, description: string): Observable<DocuInterface>{

        const newDoc = {

            name,
            description

        }

        return this.http.post<DocuInterface>("http://localhost:3000/contents", newDoc)

    }

}
