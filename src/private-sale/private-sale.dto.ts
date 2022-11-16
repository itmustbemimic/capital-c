export class CreatePrivateSaleDto {
  readonly networkId: number;
  readonly address: string;
  readonly currency: string;
  readonly investment: number;
  readonly neon: number;
  readonly tx: string;
  readonly date: string;
}