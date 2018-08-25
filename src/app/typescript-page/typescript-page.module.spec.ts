import { TypescriptPageModule } from './typescript-page.module';

describe('TypescriptPageModule', () => {
  let typescriptPageModule: TypescriptPageModule;

  beforeEach(() => {
    typescriptPageModule = new TypescriptPageModule();
  });

  it('should create an instance', () => {
    expect(typescriptPageModule).toBeTruthy();
  });
});
