import { RecordType } from '../../enum/record-type.enum';

export class CreateRecordDto {
  type: RecordType;
  amount: number;
  remark: string;
  createdDate: Date;
  uid: number;
}
