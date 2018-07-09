import { TestBed, inject } from '@angular/core/testing';
import { ToastrUtil } from './toastr.service';



describe('ToastrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrUtil]
    });
  });

  it('should be created', inject([ToastrUtil], (service: ToastrUtil) => {
    expect(service).toBeTruthy();
  }));
});
