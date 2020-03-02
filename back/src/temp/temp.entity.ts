import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Temp extends BaseEntity {
  // 베이스 엔트리로 하면 User 로 컨트롤 가능 userEntity.save(); 요런식으로 저장 할수있슴 이거 안하면 this._userRepository.save(userEntity); 이거로 저장해야함.
  constructor(partial?: Partial<Temp>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn() // 프라이머키 설정
  id: number;

  @Column({ length: 500 }) // length 설정
  text: string;

  @Column({ nullable: true } )
  number: number;

  @Column( { default: true })
  @Exclude({ toPlainOnly: false }) // 가리는 컬럼
  hide: boolean;

  @Expose({ name: 'textHo'}) // 이거랑... 이거는 어캐 나오게하는걸까? 반환된 함수값에서 접근해서 쓰는건가... 음... 이것도 잘나옴.
  get text2(): string {
    return `${this.text} ${this.number}`;
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
